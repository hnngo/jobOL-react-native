import firebase from 'firebase';
import axios from 'axios';
import {
  ACT_FETCH_JOB_LIST,
  ACT_FETCH_WISH_LIST,
} from '../constant/ActionConst';


const GITHUB_JOB_ROOT_URL = 'https://jobs.github.com/positions.json?';
const SEARCH_KEYWORD = 'javascript';
const SEARCH_LOCATION = 'new+york';

export const actFetchJobList = () => {
  // Fetch job through firebase
  // return (dispatch) => {
  //   firebase.database().ref('/publicData/jobs')
  //   .on('value', snapshot =>{
  //     dispatch({
  //       type: ACT_FETCH_JOB_LIST,
  //       payload: snapshot.val()
  //     })
  //   })
  // };

  // Fetch job through github jobs api
  const querry = `${GITHUB_JOB_ROOT_URL}description=${SEARCH_KEYWORD}&location=${SEARCH_LOCATION}`;

  return (dispatch) => {    
    axios.get(querry).then(response => {
      dispatch({
        type: ACT_FETCH_JOB_LIST,
        payload: response.data
      })
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
