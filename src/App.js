import "./App.scss";

import { Outlet, Route, Routes } from "react-router-dom";

import { Exercise1 } from "./exercise1";
import { Exercise2 } from "./exercise2";
import { Exercise3 } from "./exercise3";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Exercise1 />} />
        <Route path="/exercise2" element={<Exercise2 />} />
        <Route path="/exercise3" element={<Exercise3 />} />
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
        <p className="mb-1">© 2023 PST Método</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#pricacy">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="#terms">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#support">Support</a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
