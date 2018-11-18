import firebase from 'firebase';
import {
  ACT_FETCH_JOB_LIST,
  ACT_FETCH_WISH_LIST,
} from '../constant/ActionConst';

export const actFetchJobList = () => {
  return (dispatch) => {
    firebase.database().ref('/publicData/jobs')
    .on('value', snapshot =>{
      dispatch({
        type: ACT_FETCH_JOB_LIST,
        payload: snapshot.val()
      })
    })
  };
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
        dispatch({ type: ACT_FETCH_WISH_LIST, payload: newWishlist })
      });
  }
}
