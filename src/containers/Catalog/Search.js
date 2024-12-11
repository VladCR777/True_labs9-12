// // Search.js
// import React from "react";

// const Search = ({ searchTerm, setSearchTerm }) => {
//     return (
//         <div className="search-container">
//             <input
//                 type="text"
//                 placeholder="Search films by title"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />
//         </div>
//     );
// };

// export default Search;

// import React from "react";

// const Search = ({ searchTerm, setSearchTerm }) => {
//     return (
//         <div className="search-container" style={{ marginTop: '20px', textAlign: 'right', marginRight: '50px' }}>
//             <input
//                 type="text"
//                 placeholder="Search films by title"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 style={{ width: '200px', marginRight: '10px', padding: '5px' }}
//             />
//             <button type="button" onClick={() => console.log("Search term:", searchTerm)}>
//                 Search
//             </button>
//         </div>
//     );
// };

// export default Search;


// import React, { useState } from 'react';
// import './Catalog.css';
// import { Input } from 'antd'; // Імпортуємо компонент Input
// // import { SearchOutlined } from '@ant-design/icons'; // Імпортуємо іконку пошуку
// import { SearchOutlined } from '@ant-design/icons'; // Імпортуємо іконку пошуку

// const MovieSearch = () => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     return (
//         <div className="search-container" >
//             <Input
//                 type="text"
//                 placeholder="Enter movie title"
//                 value={searchTerm}
//                 onChange={handleChange}
//                 // style={{ width: '200px', marginRight: '10px', padding: '5px' }}
//                 // suffix={<SearchOutlined />} // Додаємо іконку пошуку
//                 // suffix={<SearchOutlined onClick={handleSearch} />} // Додаємо обробник до іконки пошуку
//             />
//         </div>
//     );
// };

// export default MovieSearch;
