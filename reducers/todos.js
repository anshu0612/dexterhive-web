import { GET_MSG } from '../constants/ActionTypes';

export default function getMsg(state = [], action) {
  switch (action.type) {
  case GET_MSG:
    return action.data;

  default:
    return state;
  }
}
