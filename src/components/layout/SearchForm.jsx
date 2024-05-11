import React, { useContext, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Calendar from "./Calendar";
import SearchContext from "../HolidazeContext";

function SearchForm({ setSearchLocation }) {
    const { inputValue, setInputValue } = useContext(SearchContext);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            console.log("Setting search location to:", inputValue);
            setSearchLocation(inputValue);
        }
    };


    return (<div className="mx-auto py-md">
        <Form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center">
            <Form.Control
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Where?"
                className="mr-sm-2 form-control-sm form-control whereForm"
                aria-label="Where?"
            />
            <Calendar />
            <Form.Control
                type="search"
                placeholder="How many guests?"
                className="mr-sm-2 form-control-sm form-control whereForm"
                aria-label="How many guests?"
            />
            <Button type="submit" variant="outline-success" className="btnSearch">
                <i className="bi bi-search loop"></i>
            </Button>
        </Form>
    </div>
    );
}

export default SearchForm;