import { combineReducers } from 'redux'
import {
    LOADING_HINT_TOGGLE,
    USER_INFO_CHANGE,
    ADD_ITEM,
    DELETE_ITEM,
    BTN_ADD_ITEM,
    BTN_MINUSER_ITEM,
} from 'constants/actionType'

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

//reducer
const data = (state = JSON.parse(localStorage.getItem('DataList')) || [], action) => {
    const { type, idx, item, listData } = action
    let resultState
    switch (type) {
        case ADD_ITEM:
            const findIdx = listData.findIndex((i) => i.id === item.id)
            if (state[findIdx]) {
                state[idx].amount += 1
                resultState = [...state]
                console.log('state[idx]', state[idx])
            } else {
                item.amount = 1
                resultState = [...state, item]
            }
            console.log('item', item)
            break
        case DELETE_ITEM:
            resultState = [...state.slice(0, idx), ...state.slice(idx + 1)]
            break
        case BTN_ADD_ITEM:
            const addId = state.findIndex((_, i) => i === idx)
            state[addId].amount >= 0 ? (state[addId].amount += 1) : 1
            resultState = [...state]
            break
        case BTN_MINUSER_ITEM:
            const minuserId = state.findIndex((_, i) => i === idx)
            if (state[minuserId].amount > 1) {
                state[minuserId].amount -= 1
            } else {
                state[minuserId].amount = 1
            }
            // state[minuserId].amount >= 0 ? (state[minuserId].amount -= 1) : 0
            resultState = [...state]
            console.log('state[minuserId].amount', state[minuserId].amount)
            break
        default:
            resultState = state
    }

    localStorage.setItem('DataList', JSON.stringify(resultState))

    return resultState
}

const reducers = combineReducers({
    isLoading,
    userInfo,
    data,
})

export default reducers
