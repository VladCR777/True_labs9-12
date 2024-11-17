import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { LinkingWrapper } from './Navigation.styles';
import Home from '../Home/Home';
import FilmsList from "../Catalog/Catalog";
import { SmileOutlined } from "@ant-design/icons";  
import FilmPage from "../FilmPage/Film.Page";

const Navigation = () => (
    <Router>
        <LinkingWrapper>
            <div className="navigation-icons">
                <SmileOutlined style={{ fontSize: '50px', color: '#000', marginTop: '30px', marginLeft: '50px' }} />
            </div>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'selected' : '')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Catalog" className={({ isActive }) => (isActive ? 'selected' : '')}>Catalog</NavLink>
                </li>
                <li>
                    <NavLink to="/Cart" className={({ isActive }) => (isActive ? 'selected' : '')}>Cart</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/Catalog" element={<FilmsList/>} />
                <Route path="/Cart" element={<div>Hello it is Cart</div>} />
                <Route path="/" element={<Home />} />
                <Route path="/film/:id" element={<FilmPage/>} />
            </Routes>
        </LinkingWrapper>
    </Router>
);

export default Navigation;
