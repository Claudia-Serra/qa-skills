import {
  ACCOUNT_KEY,
  isEmailValid,
  isPasswordValid,
  setLocalStorage,
} from "./util.js";

import { Link } from "react-router-dom";
import { useState } from "react";

export const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUp = (e) => {
    e.preventDefault();

    const name = values.name.trim();
    const email = values.email.trim().toLocaleLowerCase();
    const password = values.password.trim();

    if (
      !name ||
      !email ||
      !password ||
      !isPasswordValid(password) ||
      !isEmailValid(email)
    ) {
      // TODO: set specific errors: setValues({...values, emailError: ''})
      return;
    }

    // TODO: validate: already existing user

    const account = {
      name: name,
      email: email,
      password: password,
    };

    setLocalStorage(email, account);
    setLocalStorage(ACCOUNT_KEY, account);

    window.location.hash = "#/exercise3/signed-in";
  };

  return (
    <>
      <h4>Sign up</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={
              "form-control" + (values.name.trim() ? "" : " is-invalid")
            }
            id="name"
            aria-describedby="nameHelp"
            placeholder="enter your name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            autoComplete="off"
          />
          {!values.name.trim() && (
            <div className="invalid-feedback">Please enter your name.</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={
              "form-control" + (isEmailValid(values.email) ? "" : " is-invalid")
            }
            id="email"
            aria-describedby="emailHelp"
            placeholder="name@example.com"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            autoComplete="off"
          />
          {!isEmailValid(values.email) && (
            <div className="invalid-feedback">
              Please enter a valid email address.
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={
              "form-control" +
              (isPasswordValid(values.password) ? "" : " is-invalid")
            }
            id="password"
            placeholder="enter your password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <div
            id="emailHelp"
            className={
              "form-text" +
              (isPasswordValid(values.password) ? "" : " invalid-feedback")
            }
          >
            Must be at least 8 characters long, including numbers and upper and
            lower case letters.
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={signUp}>
          Sign up
        </button>
        <p className="mt-3">
          <Link to={"/exercise3/sign-in"}>
            Or sign in if you already have an account.
          </Link>
        </p>
      </form>
    </>
  );
};
