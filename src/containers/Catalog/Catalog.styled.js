import styled from 'styled-components';

export const FilterMenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    /* flex-direction: row; */
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    background-color: #f8f8f8;
    box-sizing: border-box; 
`;


export const FilterButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const ApplyButton = styled.button`
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
    background-color: #fff; 
    padding: 10px; 
`;
