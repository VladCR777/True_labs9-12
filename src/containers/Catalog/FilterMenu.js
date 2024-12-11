import React, { useState } from 'react';
import Filter from './Filter'; 
import { FilterMenuWrapper, FilterButtonsWrapper, ApplyButton } from './Catalog.styled'; 
import { Input } from 'antd'; 
import { SearchOutlined } from '@ant-design/icons'; 

const FilterMenu = ({ onApply, onSearch }) => {
    const [filters, setFilters] = useState({
        durationFilter: ''
    });

    const [searchTerm, setSearchTerm] = useState('');

    const handleFilterChange = (e) => {
        setFilters({
            durationFilter: e.target.value
        });
    };

    const handleApply = () => {
        onApply(filters);
    };

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (onSearch) {
            onSearch(term); 
        }
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Input
                    placeholder="Search movies"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ width: '200px' }}
                    suffix={<SearchOutlined />}
                />
                <ApplyButton onClick={handleApply}>Apply</ApplyButton>
            </div>
        </FilterMenuWrapper>
    );
};

export default FilterMenu;
