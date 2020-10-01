import {MODAL_SHOW_IN, MODAL_SHOW_OUT, MODAL_HIDE} from "./types";

export const modalShowIn = () => {
    return {
        type: MODAL_SHOW_IN,
        payload: true,
    }
}

export const modalShowOut= () => {
    return {
        type: MODAL_SHOW_OUT,
        payload: 'show_out',
    }
}

export const modalHide = () => {
    return {
        type: MODAL_HIDE,
        payload: false,
    }
}