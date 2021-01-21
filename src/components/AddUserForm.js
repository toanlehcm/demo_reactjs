import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../action";

function AddUserForm(props) {
    var [user, setUser] = useState('');

    function editField(e) {
        setUser(e.target.value);
    }

    function handleSubmit(e) {
        if (user !== '') {
            props.addUser(user);
            setUser('');
        }
        e.preventDefault();
    }

    return (<div>
        <h1>Contact Manager</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" value={user.name} onChange={editField} />
            <button type="submit">Add</button>
        </form>
    </div>);
}

const mapDipatchToProps = {
    addUser
}

export default connect(null, mapDipatchToProps)(AddUserForm);