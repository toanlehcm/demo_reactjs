import React, { useState, startTransition, useEffect } from "react";
import ReactDOM from "react-dom";
import { ErrorMessage, useFormik } from "formik";
import "./style.css";
import "./output.css";
import { DeploymentStatus } from "./components/VercelSpinner";
import ActivityListDemo from "./components/ActivityLists/ActivityListDemo";
import LoginPage from "./components/login-page/LoginPage";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues

const validate = (values) => {
  if (!values.firstName) {
    return { firstName: "Required" };
  }
  if (values.firstName.length > 15) {
    return { firstName: "Must be 15 characters or less" };
  }
  if (!values.lastName) {
    return { lastName: "Required" };
  }
  if (values.lastName.length > 20) {
    return { lastName: "Must be 20 characters or less" };
  }
  if (!values.email) {
    return { email: "Required" };
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    return { email: "Invalid email address" };
  }
  return {};
};

const buildSearchIndex = (items) => {
  console.log("🔨 buildSearchIndex running");
  return; /* big computation */
};

const userProfile = () => {
  console.log("JSON.parse runs on every render", JSON.parse('{"name":"John Doe","age":30}'));
  return;
};

const SignupForm = () => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [searchIndex] = useState(() => buildSearchIndex(1));
  const [searchUserProfile] = useState(() => userProfile());
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => {
      //   console.log("window.scrollY", window.scrollY);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" onChange={formik.handleChange} value={formik.values.firstName} />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" onChange={formik.handleChange} value={formik.values.lastName} />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <button type="submit">Submit</button>

      {/* <DeploymentStatus /> */}

      {/* <ActivityListDemo /> */}
    </form>
  );
};

function App() {
  // return <SignupForm />;
  return <LoginPage />;
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
