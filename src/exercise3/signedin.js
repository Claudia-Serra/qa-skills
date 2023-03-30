import {
  ACCOUNT_KEY,
  navigateToIndex,
  setLocalStorage,
  useLocalStorage,
} from "./util.js";

import { useEffect } from "react";

export const SignedIn = () => {
  const [account, setAccount] = useLocalStorage(ACCOUNT_KEY, null);

  useEffect(() => {
    if (account) {
      return;
    }
    navigateToIndex();
  }, [account]);

  const signOut = (e) => {
    e.preventDefault();
    setLocalStorage(ACCOUNT_KEY, null);
    navigateToIndex();
  };

  return (
    <>
      <h4>User is signed in</h4>
      <div className="mb-3">
        <dl>
          <dt>Name</dt>
          <dd>{account && account.name}</dd>
        </dl>
        <dl>
          <dt>Email address</dt>
          <dd>{account && account.email}</dd>
        </dl>
      </div>
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-primary me-3"
          onClick={signOut}
        >
          Sign out
        </button>
        {/* <button type="button" className="btn btn-danger">
          Delete account
        </button> */}
      </div>
    </>
  );
};
