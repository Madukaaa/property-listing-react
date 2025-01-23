import React, { useState } from 'react';
import '../styles/SearchForm.css';

const SearchForm = ({ onSearch }) => {
    const [type, setType] = useState('any');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minBedrooms, setMinBedrooms] = useState('');
    const [maxBedrooms, setMaxBedrooms] = useState('');
    const [dateAfter, setDateAfter] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const criteria = {
            type,
            minPrice,
            maxPrice,
            minBedrooms,
            maxBedrooms,
            dateAfter,
        };

        console.log('Form Submitted with criteria:', criteria); // Debugging
        onSearch(criteria);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <h3>Search Properties</h3>

            {/* Property Type */}
            <label>Type:</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="any">Any</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
            </select>

            {/* Price field */}
            <label>Min Price:</label>
            <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Min Price"
            />

            <label>Max Price:</label>
            <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Max Price"
            />

            {/* Bedrooms field */}
            <label>Min Bedrooms:</label>
            <input
                type="number"
                value={minBedrooms}
                onChange={(e) => setMinBedrooms(e.target.value)}
                placeholder="Min Bedrooms"
            />

            <label>Max Bedrooms:</label>
            <input
                type="number"
                value={maxBedrooms}
                onChange={(e) => setMaxBedrooms(e.target.value)}
                placeholder="Max Bedrooms"
            />

            {/* Date field */}
            <label>Date Added After:</label>
            <input
                type="date"
                value={dateAfter}
                onChange={(e) => setDateAfter(e.target.value)}
            />

            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
