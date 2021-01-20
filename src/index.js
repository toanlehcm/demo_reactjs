import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import App from "./App";

function ContactManager() {
    var [user, setUser] = useState("");

    function change(e) {
        setUser(e.target.value);
    }

    function submit(e) {
        e.preventDefault();
    }

    return <div>
        <h1>Contact manager</h1>

        <form onSubmit={submit}>
            <input type="text" value={user.name} onChange={change} placeholder="add new contact" />
            <button type="submit">Add</button>
        </form>
    </div>;
}

function GetUserList(props) {
    var arr = props.data;
    var listItems = arr.map((val, index) => <li key={index}>{val}</li>);

    return <ul>{listItems}</ul>
}

var contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

var el = (
    <div>
        <ContactManager />
        <GetUserList data={contacts} />
    </div>
);

ReactDOM.render(el, document.getElementById('app'));
