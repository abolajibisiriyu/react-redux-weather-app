import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
  console.log('Action Recieved', action);
  switch (action.type) {
    case FETCH_WEATHER:
      if (action.payload.data === undefined) return state;
      return [action.payload.data, ...state];
      break;
    default:
      return state;
      break;
  }
}
