import React from 'react';
import './App.css';
import {applyMiddleware, compose, createStore} from "redux";
import app from "./reducers";
import thunk from "redux-thunk";
import Home from "./components/Home";
import {Provider} from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    app,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

function App() {
  return (
      <Provider store={store}>
        <Home />
      </Provider>
  );
}

export default App;
