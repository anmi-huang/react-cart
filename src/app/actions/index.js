import {
    LOADING_HINT_TOGGLE,
    USER_INFO_CHANGE,
    ADD_ITEM,
    DELETE_ITEM,
    BTN_ADD_ITEM,
    BTN_MINUSER_ITEM,
    DELETE_CHECKOUT
} from 'constants/actionType'

export const toggleLoadingHint = (bool) => ({
    type: LOADING_HINT_TOGGLE,
    payload: bool
})

export const changeUserInfo = (obj) => ({
    type: USER_INFO_CHANGE,
    payload: obj
})

export const addItem = (idx, item) => {
    return {
        type: ADD_ITEM,
        idx,
        item
    }
}
export const deleteItem = (idx) => {
    return {
        type: DELETE_ITEM,
        idx
    }
}
export const btnAddItem = (idx) => {
    return {
        type: BTN_ADD_ITEM,
        idx
    }
}
export const btnMinuserItem = (idx) => {
    return {
        type: BTN_MINUSER_ITEM,
        idx
    }
}
export const deleteCheckout = () => {
    return {
        type: DELETE_CHECKOUT
    }
}
