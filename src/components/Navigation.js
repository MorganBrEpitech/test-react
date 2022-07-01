import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to="/">
                <h1>Accueil</h1>
            </NavLink>
            <NavLink to="/produits">
                <h1>Produits</h1>
            </NavLink>
            <NavLink to="/visiteurs">
                <h1>Visiteurs</h1>
            </NavLink>
            <NavLink to="/clics">
                <h1>Clics</h1>
            </NavLink>
        </div>
    );
};

export default Navigation;