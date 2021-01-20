import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";
// import App from "./App";

function AddUserForm(props) {
    var [user, setUser] = useState("");

    function change(e) {
        setUser(e.target.value);
    }

    function submit(e) {
        if (user !== '') {
            props.submit(user);
            setUser('');
        }
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

function ContactManager(props) {
    var [contacts, setContacts] = useState(props.data);

    function addUser(name) {
        setContacts([...contacts, name]);
    }

    return (
        <div>
            <AddUserForm submit={addUser} />
            <GetUserList data={contacts} />
        </div>
    );
}

var contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

ReactDOM.render(<ContactManager data={contacts} />, document.getElementById('app'));
