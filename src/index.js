import React from "react";
import ReactDOM from "react-dom";
import AddUserForm from "./components/AddUserForm";
import GetUserList from "./components/GetUserList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

const initialState = {
    contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"]
};

// Reducer function
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER':
            return { ...state, contacts: [...state.contacts, action.data] }
        default:
            return state;
    }
}

// create store
const store = createStore(reducer);

// pass the store to our components
ReactDOM.render(
    <Provider store={store}>
        <AddUserForm />
        <GetUserList />
    </Provider>,
    document.getElementById('app'));