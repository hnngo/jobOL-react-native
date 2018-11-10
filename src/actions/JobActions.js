import firebase from 'firebase';
import { ACT_FETCH_JOB_LIST } from '../constant/ActionConst';

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