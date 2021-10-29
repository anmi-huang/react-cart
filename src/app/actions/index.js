import { LOADING_HINT_TOGGLE, USER_INFO_CHANGE } from "constants/actionType"

export const toggleLoadingHint = (bool) => ({
	type: LOADING_HINT_TOGGLE,
	payload: bool
})

export const changeUserInfo = (obj) => ({
	type: USER_INFO_CHANGE,
	payload: obj
})
