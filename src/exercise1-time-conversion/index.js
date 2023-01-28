import React, { useState } from "react";

import { Conversion } from "./conversion";
import { DATE_FORMAT } from "./util.js";
import dayjs from "dayjs";

export const Exercise1 = ({ onChange } = {}) => {
  const [time, setTime] = useState(dayjs().format(DATE_FORMAT));
  const [prevTime, setPrevTime] = useState(null);

  return (
    <>
      <div className="py-5 text-center">
        <h2>Exercise 1 - Time Conversion</h2>
        <p className="lead">
          This tool converts a time in Portugal/Lisbon into the time in other
          locations. Some time zones have Daylight Saving Time (DST), with time
          shifts in the spring and fall, and others don't.
        </p>
      </div>
      <div className="row g-5">
        <Conversion dateTime={prevTime} />
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Date and Time in Portugal/Lisbon</h4>
          <form className="needs-validation" noValidate="">
            <div className="row gy-3">
              <div className="col-md-5">
                <label htmlFor="cc-name" className="form-label">
                  Date and time
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder={DATE_FORMAT}
                  required=""
                  value={time}
                  onChange={(e) => setTime(e.currentTarget.value)}
                />
                <div className="invalid-feedback">Invalid </div>
              </div>
            </div>

            <hr className="my-4" />

            <button
              className="w-100 btn btn-primary btn-lg"
              onClick={(e) => {
                e.preventDefault();
                setPrevTime(time);
              }}
            >
              Convert time
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
