import React from "react";
import './Catalog.css'

function Filter({ filterName, value, onChange, options }) {
    return (
        <div>
            <select className="catalog__filter" value={value} onChange={onChange}>
                <option value="" disabled>{filterName}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
