import axios from 'axios'
import { FETCH_MORE_BEERS } from '../types';

export const fetchMoreBeer = () => async (dispatch, getState) => {
  const { page } = getState()
  try {
    const newBeer = await axios({
      method: 'get',
      url: `https://api.punkapi.com/v2/beers?page=${page}&per_page=20`,
    })
    dispatch({
      type: FETCH_MORE_BEERS,
      list: newBeer.data
    })
  } catch (e) {
    console.warn(e)
  }
}
