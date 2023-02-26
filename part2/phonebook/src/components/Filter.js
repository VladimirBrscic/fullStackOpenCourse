import React from "react";

const Filter = ({ inputHandler, value }) => {
    return (
        <div>
            filter shown with:
            <input onChange={inputHandler} value={value} />
        </div>
    );
};

export default Filter;
