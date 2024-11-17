import React, { useState } from 'react';
import Filter from './Filter'; 
import { FilterMenuWrapper, FilterButtonsWrapper, ApplyButton } from './Catalog.styled'; 

const FilterMenu = ({ onApply }) => {
    const [filters, setFilters] = useState({
        durationFilter: ''
    });

    const handleFilterChange = (e) => {
        setFilters({
            durationFilter: e.target.value
        });
    };

    const handleApply = () => {
        // Викликаємо функцію для фільтрації фільмів
        onApply(filters);
    };

    return (
        <FilterMenuWrapper>
            <FilterButtonsWrapper>
                <Filter 
                    filterName="Duration"
                    value={filters.durationFilter}
                    onChange={handleFilterChange}
                    options={[
                        { value: '', label: 'All' },
                        { value: 'under60', label: 'Under 60 min' },
                        { value: 'under120', label: 'Under 120 min' },
                        { value: 'over120', label: 'Over 120 min' }
                    ]}
                />
            </FilterButtonsWrapper>
            <ApplyButton onClick={handleApply}>Apply</ApplyButton>
        </FilterMenuWrapper>
    );
};

export default FilterMenu;
