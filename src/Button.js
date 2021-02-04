import React, { forwardRef, useImperativeHandle, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Button = forwardRef((props, ref) => {
  const [date, setDate] = useState(new Date());

  const onInputChange = (date) => setDate(date);

  useImperativeHandle(ref, () => ({ onInputChange }));

  return (
    <div>
      <DatePicker
        className="report-date-picker"
        selected={date}
        onChange={(date) => onInputChange(date)}
        dateFormat="MM/dd/yyyy"
        showYearDropdown
      />
      <h3>Selected Date : {JSON.stringify(date)} </h3>
    </div>
  );
});

export default Button;
