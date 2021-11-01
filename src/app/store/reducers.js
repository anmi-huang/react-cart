import { combineReducers } from "redux"
import { LOADING_HINT_TOGGLE, USER_INFO_CHANGE } from "constants/actionType"

const isLoading = (state = false, action) => {
	switch (action.type) {
		case LOADING_HINT_TOGGLE:
			return action.payload
		default:
			return state
	}
}
const userInfo = (state = null, action) => {
	switch (action.type) {
		case USER_INFO_CHANGE:
			return action.payload
		default:
			return state
	}
}

const reducers = combineReducers({
	isLoading,
	userInfo
})

export default reducers
