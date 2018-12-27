import firebase from 'firebase';
import axios from 'axios';
import {
  ACT_FETCH_JOB_LIST,
  ACT_FETCH_WISH_LIST,
  ACT_JOB_INPUT_KEYWORD,
  ACT_JOB_INPUT_LOCATION,
  ACT_FETCH_JOB_FRONTEND,
  ACT_FETCH_JOB_BACKEND,
  ACT_JOB_CLEAR_WISHLIST
} from '../constant/ActionConst';


const GITHUB_JOB_ROOT_URL = 'https://jobs.github.com/positions.json?';
const SEARCH_KEYWORD = 'javascript';
const SEARCH_LOCATION = 'new+york';
const BACK_END = 'Back End';
const FRONT_END = 'Front End';

export const actFetchJobList = (keyword = SEARCH_KEYWORD, location = SEARCH_LOCATION) => {
  // Fetch job through github jobs api
  const querry = `${GITHUB_JOB_ROOT_URL}description=${keyword}&location=${location}`;

  return (dispatch) => {    
    axios.get(querry).then(response => {
      switch (keyword) {
        case BACK_END:
          dispatch({ type: ACT_FETCH_JOB_BACKEND, payload: response.data });
          break;
        case FRONT_END: 
          dispatch({ type: ACT_FETCH_JOB_FRONTEND, payload: response.data });
          break;
        default:
          dispatch({ type: ACT_FETCH_JOB_LIST, payload: response.data });
          break;
      }
    }).catch(e => console.log(e));
  }
};

export const actBookMarkJob = (jobId, wishlistData) => {
  const { currentUser } = firebase.auth();
  let newWishlist = wishlistData.slice();

  if (wishlistData.includes(jobId)) {
    newWishlist.splice(wishlistData.indexOf(jobId), 1);
  } else {
    newWishlist.push(jobId);
  }
  
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}`).set({ wishlist: newWishlist })
      .then(() => {
        // Store wishlist in the local storage
        dispatch({
          type: ACT_FETCH_WISH_LIST,
          payload: newWishlist
        });
      })
      .catch((e) => console.log(e));
  }
}

export const actJobInputKeyword = (inputKeyword) => {
  return {
    type: ACT_JOB_INPUT_KEYWORD,
    payload: inputKeyword
  }
}

export const actJobInputLocation = (inputLocation) => {
  return {
    type: ACT_JOB_INPUT_LOCATION,
    payload: inputLocation
  }
}

export const actJobWishListClear = () => {
  return {
    type: ACT_JOB_CLEAR_WISHLIST
  }
}
