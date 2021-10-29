import React from "react"
import ReactDOM from "react-dom"
import "./assets/css/app.global.scss"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducers from "store/reducers"

const MOUNT_NODE = document.getElementById("root")
const __DEV__ = process.env.NODE_ENV === "development"
const store = createStore(reducers, applyMiddleware(thunk))

let render = () => {
    const Root = require("./containers/Root").default

    ReactDOM.render(<Root store={store} />, MOUNT_NODE)
}

if (__DEV__) {
    if (module.hot) {
        const renderApp = render

        render = () => {
            try {
                renderApp()
            } catch (e) {
                console.error(e)
            }
        }

        // Setup hot module replacement
        module.hot.accept(["./containers/Root"], () =>
            setImmediate(() => {
                ReactDOM.unmountComponentAtNode(MOUNT_NODE)
                render()
            })
        )
    }
}

render()
