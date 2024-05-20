import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarAvailability({ data, onExcludeDatesChange }) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const { bookings } = data || {};

    const excludeDates = bookings ? bookings.map((booking) => {
        const dateFrom = new Date(booking.dateFrom);
        const dateTo = new Date(booking.dateTo);
        return [dateFrom, dateTo];
    }).flat() : [];

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

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

export default CalendarAvailability;