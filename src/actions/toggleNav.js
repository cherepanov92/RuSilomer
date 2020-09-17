import { NAV_SHOW, NAV_HIDE } from "./types";

export const navShow = () => {
    return {
        type: NAV_SHOW,
        payload: true,
    }
}

export const navHide = () => {
    return {
        type: NAV_HIDE,
        payload: false,
    }
}