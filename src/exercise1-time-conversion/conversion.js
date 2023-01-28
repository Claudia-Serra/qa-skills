import { convert } from "./util.js";

export const TIMEZONES = [
  {
    label: "New York",
    delta: -5,
  },
  {
    label: "Buenos Aires",
    delta: -3,
  },
  {
    label: "Lisbon",
    delta: 0,
  },
  {
    label: "UTC",
    delta: 0,
  },
];

export const Conversion = ({ dateTime }) => (
  <div className="col-md-5 col-lg-4 order-md-last">
    <h4 className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-primary">Time Conversion</span>
      {/* <span className="badge bg-primary rounded-pill">3</span> */}
    </h4>
    <ul className="list-group mb-3">
      {TIMEZONES.map((x) => (
        <li
          key={x.label}
          className="list-group-item d-flex justify-content-between lh-sm"
        >
          <div>
            <h6 className="my-0">{x.label}</h6>
            <small className="text-muted">
              {convert({ date: dateTime, delta: x.delta }) || "n/a"}
            </small>
          </div>
          <span className="text-muted">{x.delta} hours</span>
        </li>
      ))}
    </ul>
  </div>
);
