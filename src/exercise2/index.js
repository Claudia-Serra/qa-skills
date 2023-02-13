import React from "react";

export const Exercise2 = () => {
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
                className="form-control"
                id="example2-date-input"
                aria-describedby="basic-addon3"
              />
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
