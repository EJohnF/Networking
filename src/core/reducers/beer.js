import { FETCH_MORE_BEERS, RESET_LIST } from '../types';
import { uniqBy } from 'lodash';

const defaultState = {
  list: [],
  page: 1,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_MORE_BEERS:
      return {
        ...state,
        list: uniqBy([...state.list, ...action.list], item => item.id),
        page: state.page + 1,
      }
    case RESET_LIST:
      return {
        ...defaultState
      }
    default:
      return state
  }
}
