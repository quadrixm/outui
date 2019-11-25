import React from 'react';
import './App.css';
import {applyMiddleware, compose, createStore} from "redux";
import app from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    app,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

function App() {
  return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered">
              <h3>Select Employee</h3>
              <div className="select">
                <select>
                  <option>Employee 1</option>
                  <option>Employee 2</option>
                </select>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column has-text-centered">
              <h3>Survey List</h3>
            </div>
            <div className="column has-text-centered">
              <h3>Assign Survey</h3>
            </div>
          </div>
          <div className="columns">
            <div className="column has-text-centered">
              <button className="button is-primary">
                Done
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}

export default App;
