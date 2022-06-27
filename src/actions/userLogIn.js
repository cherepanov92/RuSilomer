import {USER_LOGIN} from './types'

export const setUserLogIn = (user) => {
  return {
    type: USER_LOGIN,
    payload: user,
  }
}
