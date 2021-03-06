import * as React from "react";
import * as ReactDom from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";

import Home from "./pages/Home";
import Order from "./pages/Order";
import FourOFour from "./pages/404";

import "./styles/global.css";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/order">
                    <Order />
                </Route>
                <Route path="*">
                    <FourOFour />
                </Route>
            </Switch>
        </Router>
    )
}

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)