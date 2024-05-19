import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookStayCalendar({ data, onExcludeDatesChange, excludeDates, startDate, endDate, onChange }) {

    useEffect(() => {
        onExcludeDatesChange(excludeDates.length === 0);
    }, [excludeDates, onExcludeDatesChange]);

    return (
        <div className="availabilityCalendar">
            <DatePicker
                calendarStartDay={1}
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                excludeDates={excludeDates}
                selectsRange
                selectsDisabledDaysInRange
                inline
                minDate={new Date()}
                className="mr-sm-2 form-control-sm form-control"
            />
        </div>
    );
};

export default BookStayCalendar;