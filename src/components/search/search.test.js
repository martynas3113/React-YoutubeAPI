import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Search from './search';

//Checking input field and button render
it("Renders without crashing", () => {
    const {queryByTestId, queryByPlaceholderText} = render(<Search/>);

    expect(queryByTestId("search-button")).toBeTruthy();
    expect(queryByPlaceholderText("Enter Search Keyword")).toBeTruthy();
})

//Checking input field value to change when entering text
describe("Input value", ()=> {
    it("updates on change", () => {
        const {queryByPlaceholderText} = render(<Search/>);
    const searchInput = queryByPlaceholderText("Enter Search Keyword");

    fireEvent.change(searchInput, {target :{value: "test"}});

    expect(searchInput.value).toBe("test");
    })
    
})