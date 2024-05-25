import React, { useContext, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchContext from "../HolidazeContext";

function SearchForm({ setSearchLocation }) {
    const { inputValue, setInputValue } = useContext(SearchContext);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setSearchLocation(inputValue);
        }
    };

    return (<div className="mx-auto py-md">
        <Form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center">
            <Form.Control
                type="search"
                placeholder="Search"
                className="mr-sm-2 form-control-sm form-control whereForm"
                aria-label="Search"
            />
            <Button type="submit" variant="outline-success" className="btnSearch">
                <i className="bi bi-search magnifyingGlass"></i>
            </Button>
        </Form>
    </div>
    );
}

export default SearchForm;