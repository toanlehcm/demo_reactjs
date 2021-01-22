import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../action";
import SweetAlert from 'react-bootstrap-sweetalert';
import { Formik } from "formik";

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

    function handleDelete(e) {
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

    function onCancelDelete() {
        setAlert(null);
    }

    return (<div>
        <h1>Contact Manager</h1>
        <Formik
            initialValues={{ email: '', password: '' }}

            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }

                return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >

            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                    <p>
                        <input type="email" name="email" value={user.name} onChange={editField} onBlur={handleBlur} />
                        <p>{errors.email && touched.email && errors.email}</p>
                    </p>

                    <p>
                        <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                        <p>{errors.password && touched.password && errors.password}</p>
                    </p>

                    <button type="submit" disabled={isSubmitting}>Submit</button>
                    <button type='submit' onClick={handleDelete}>Delete</button> {alert}
                </form>
            )}
        </Formik>
    </div>);
}

const mapDipatchToProps = {
    addUser
}

export default connect(null, mapDipatchToProps)(AddUserForm);