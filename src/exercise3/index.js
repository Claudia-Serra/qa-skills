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
        <div className="col-md-6 col-lg-6 offset-md-3 offset-lg-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};
