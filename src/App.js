import "./App.scss";

import { Outlet, Route, Routes } from "react-router-dom";

import { Exercise1 } from "./exercise1";
import { Exercise2 } from "./exercise2";
import { Exercise3 } from "./exercise3";
import { SignIn } from "./exercise3/signin";
import { SignUp } from "./exercise3/signup";
import { SignedIn } from "./exercise3/signedin";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Exercise1 />} />
        <Route path="/exercise1" element={<Exercise1 />} />
        <Route path="/exercise2" element={<Exercise2 />} />
        <Route element={<Exercise3 />}>
          <Route path="/exercise3" element={<SignIn />} />
          <Route path="/exercise3/sign-up" element={<SignUp />} />
          <Route path="/exercise3/sign-in" element={<SignIn />} />
          <Route path="/exercise3/signed-in" element={<SignedIn />} />
        </Route>
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <main className="App">
        <Outlet />
      </main>
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© Cláudia Serra</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#pricacy">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="#terms">Terms</a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://github.com/claudia-serra/qa-skills"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
