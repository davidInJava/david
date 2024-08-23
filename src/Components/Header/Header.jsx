import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">DOSTAVKI-NA-DONU</div>
            <div className="nav">
                <span className="nav-item">Главная</span>
                <span className="nav-item">О нас</span>
                <span className="nav-item">Стоимость</span>
            </div>
            <div className="trapezoid-container">
                <div className="trapezoid"></div>
                <div className="phone">+7-(919)-898-11-74</div>
            </div>
        </div>
    );
};

export default Header;