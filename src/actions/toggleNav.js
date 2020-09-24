import {NAV_SHOW_IN, NAV_SHOW_OUT, NAV_HIDE} from "./types";

export const navShowIn = () => {
    return {
        type: NAV_SHOW_IN,
        payload: 'show_in',
    }
}

export const navShowOut= () => {
    return {
        type: NAV_SHOW_OUT,
        payload: 'show_out',
    }
}

export const navHide = () => {
    return {
        type: NAV_HIDE,
        payload: 'hidden',
    }
}