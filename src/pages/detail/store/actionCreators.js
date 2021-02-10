import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants';

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title: fromJS(title),
  content: fromJS(content)
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id' + id).then((res) => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content));
    }).catch(()=>{

    })
  }
}

