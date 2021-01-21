import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../action";
import SweetAlert  from 'react-bootstrap-sweetalert';

function AddUserForm(props) {
    var [user, setUser] = useState('');
    var [alert, setAlert] = useState(false);

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

    function handleDelete(e){
        const getAlert = () => (
            <SweetAlert
            danger
            //warning
            showCancel
            confirmBtnText="OK, delete it!"
            confirmBtnBsStyle="danger"
            title="Are you sure you want to delete?"
            cancelBtnBsStyle="default"
            onConfirm={onCancelDelete}
            onCancel={onCancelDelete}
            focusCancelBtn
            >
            You will not be able to recover this product!
        </SweetAlert>
        );

        setAlert(getAlert);
    
        e.preventDefault();
    }

    function onCancelDelete(){
        setAlert(null);
    }

    return (<div>
        <h1>Contact Manager</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" value={user.name} onChange={editField} />
            <button type="submit">Add</button>
            <button type='submit' onClick={handleDelete}>Delete</button> {alert}
        </form>
    </div>);
}

const mapDipatchToProps = {
    addUser
}

export default connect(null, mapDipatchToProps)(AddUserForm);