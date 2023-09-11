import React from "react";
import dayjs from "dayjs";
import { useState } from "react";

export const Exercise2 = () => {
  const [values, setValues] = useState({
    date: undefined,
    error: "",
  });

  const setDate = (e) => {
    const s = e.target.value;

    const error =
      s && dayjs().isValid()
        ? undefined
        : "Oops! It seems like you've entered an invalid date. Please make sure the date format is correct and falls within a valid range.";

    setValues({ ...values, error: error });
  };

  return (
    <>
      <div className="py-5 text-center">
        <h2>Exercise 2 - Datepicker</h2>
        <p className="lead">
          This tool aims at letting the user select a date by expanding the date
          picker or, as an alternative, simply type it directly in the input
          text field.
        </p>
      </div>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 offset-md-4 offset-lg-4">
          <div className="mb-3">
            <label htmlFor="example2-date-input" className="form-label">
              Date selection
            </label>
            <div className="input-group">
              <input
                type="date"
                className={"form-control" + (values.error ? " is-invalid" : "")}
                id="example2-date-input"
                aria-describedby="basic-addon3"
                onChange={setDate}
                onKeyUp={(e) => {
                  if (/^[a-zA-Z]$/.test(e.key)) {
                    setValues({
                      ...values,
                      error:
                        "Oops! Dates should only contain digits. Please enter the date in the correct format.",
                    });
                  }
                }}
              />
              {values.error && (
                <div className="invalid-feedback">{values.error}</div>
              )}
            </div>
            <div className="form-text">
              Type a date or select from the picker.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
