import "./App.scss";

import { Exercise1 } from "./exercise1-time-conversion";

function App() {
  return (
    <>
      <main className="App">
        <Exercise1 />
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
