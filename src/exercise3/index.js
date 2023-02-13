import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import React from "react";

export const Exercise3 = () => {
  return (
    <>
      <div className="py-5 text-center">
        <h2>Exercise 3 - Sign Up, Sign In, Sign out</h2>
        <p className="lead">
          This tool lets users simulate signing up to a service and then sign in
          or sign out. Bear in mind that this is a client-side tool, which means
          any data entered with only be stored and available in the user's
          browser.
        </p>
      </div>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 offset-md-4 offset-lg-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export const SignUp = () => {
  return (
    <>
      <h4>Sign up</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          <div id="emailHelp" className="form-text">
            Must be at least 8 characters long, including numbers and upper and
            lower case letters.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
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

export const SignIn = () => {
  return (
    <>
      <h4>Sign in</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
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
