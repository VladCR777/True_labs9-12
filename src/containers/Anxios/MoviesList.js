// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MoviesList = () => {
//     const [movies, setMovies] = useState([]); // Стан для збереження отриманих даних
//     const [loading, setLoading] = useState(true); // Стан для відображення завантаження
//     const [error, setError] = useState(null); // Стан для помилок

//     useEffect(() => {
//         // Отримуємо дані з бекенда
//         axios
//             .get('http://localhost:1338/api/movies') // Звернення до маршруту бекенда
//             .then((response) => {
//                 setMovies(response.data); // Зберігаємо отримані фільми
//                 setLoading(false); // Завантаження завершене
//             })
//             .catch((err) => {
//                 setError(err.message); // Обробка помилки
//                 setLoading(false);
//             });
//     }, []); // Порожній масив залежностей — запит відправляється один раз при завантаженні

//     if (loading) return <div>Loading...</div>; // Показуємо "завантаження", поки дані ще приходять
//     if (error) return <div>Error: {error}</div>; // Відображаємо помилку, якщо сталася

//     return (
//         <div>
//             <h1>Movies List</h1>
//             <ul>
//                 {movies.map((movie) => (
//                     <li key={movie.id}>
//                         {movie.title} - {movie.duration} minutes
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default MoviesList;
