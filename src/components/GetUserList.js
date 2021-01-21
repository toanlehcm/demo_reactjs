import React from "react";
import { connect } from "react-redux";

function GetUserList(props) {
    var arrUser = props.contacts;

    var listUser = arrUser.map((val, index) => <li key={index}>{val}</li>);

    return (<ul>{listUser}</ul>);
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(GetUserList);