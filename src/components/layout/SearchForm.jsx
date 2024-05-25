import React, { useContext, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchContext from "../HolidazeContext";
import { searchVenues } from "../../api/search";

function SearchForm() {
    const { inputValue, setInputValue, setSearchResults } = useContext(SearchContext);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {

            const results = await searchVenues(inputValue);
            setSearchResults(results);
        }
    };

    return (<div className="mx-auto py-md">
        <Form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center">
            <Form.Control
                type="search"
                placeholder="Search"
                className="mr-sm-2 form-control-sm form-control whereForm"
                aria-label="Search"
                onChange={handleInputChange}
            />
            <Button type="submit" variant="outline-success" className="btnSearch">
                <i className="bi bi-search magnifyingGlass"></i>
            </Button>
        </Form>
    </div>
    );
}

export default SearchForm;