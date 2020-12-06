import {SET_SOCIAL} from './types'

export const setSocial = (social) => {
  return {
    type: SET_SOCIAL,
    payload: social,
  }
}
