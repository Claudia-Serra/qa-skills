import { ACCOUNT_KEY, getLocalStorageValue, setLocalStorage } from "./util.js";

import { Link } from "react-router-dom";
import { useState } from "react";

export const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
  });

  const signIn = (e) => {
    e.preventDefault();

    const email = values.email; // LEGIT BUG: .trim().toLocaleLowerCase();
    const password = values.password.trim();

    const account = getLocalStorageValue(email);

    if (!account || account.password !== password) {
      setValues({ ...values, error: "some error........." });
      return;
    }

    setLocalStorage(ACCOUNT_KEY, account);
    window.location.hash = "#/exercise3/signed-in";
  };

  return (
    <>
      <h4>Sign in</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={"form-control" + (values.error ? " is-invalid" : "")}
            id="email"
            aria-describedby="emailHelp"
            placeholder="name@example.com"
            value={values.email}
            onChange={(e) =>
              setValues({ ...values, error: undefined, email: e.target.value })
            }
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={"form-control" + (values.error ? " is-invalid" : "")}
            id="password"
            placeholder="enter your password"
            value={values.password}
            onChange={(e) =>
              setValues({
                ...values,
                error: undefined,
                password: e.target.value,
              })
            }
          />
          {values.error && (
            <div className="invalid-feedback">Invalid credentials.</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary" onClick={signIn}>
          Sign in
        </button>
        <p className="mt-3">
          <Link to={"/exercise3/sign-up"}>
            Or sign up to create a new account.
          </Link>
        </p>
      </form>
    </>
  );
};
