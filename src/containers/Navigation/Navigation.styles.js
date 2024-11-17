import styled from 'styled-components';

export const LinkingWrapper = styled.div`
.selected {
    :after {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 50%;
        height: 16px;
        border-left: 1px solid black;
    }
}

.navigation-icons {
    position: absolute;
        left: 20px; 
        top: 19%;
        transform: translateY(-50%); 
        z-index: 1;  
    }

ul {
    list-style-type:none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
}


li {
    display: inline-block;
    padding: 5px 5px 10px 5px;
    position: relative;
    font-weight: bold;
    margin: 10px 30px;
    font-size: 24px;
    font-weight: 100;
    a {
        color: black;
    }
}



/* Додайте це у ваш CSS для Navigation */
.search-container {
    display: flex;
    align-items: center;
    margin-left: auto;
}

.search-container input {
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 200px;
}`
