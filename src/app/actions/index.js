import {
    LOADING_HINT_TOGGLE,
    USER_INFO_CHANGE,
    ADD_ITEM,
    DELETE_ITEM,
    BTN_ADD_ITEM,
    BTN_MINUSER_ITEM,
} from 'constants/actionType'

export const toggleLoadingHint = (bool) => ({
    type: LOADING_HINT_TOGGLE,
    payload: bool,
})

export const changeUserInfo = (obj) => ({
    type: USER_INFO_CHANGE,
    payload: obj,
})

export const addItem = (idx, item, listData) => {
    return {
        type: ADD_ITEM,
        idx,
        item,
        listData,
    }
}
export const deleteItem = (idx) => {
    return {
        type: DELETE_ITEM,
        idx,
    }
}
export const btnAddItem = (idx) => {
    return {
        type: BTN_ADD_ITEM,
        idx,
    }
}
export const btnMinuserItem = (idx) => {
    return {
        type: BTN_MINUSER_ITEM,
        idx,
    }
}
