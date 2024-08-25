import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import dostavka from '../../source/img/Доставка.png';

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <div className="home-content-1">
                <div className="home-content-1-1">
                    <div className="text-container-2">
                        <span className="title-2">Курьерская служба </span>
                        <span className="title-2">/</span>
                        <span className="title-2"> Доставка по Ростову-на-Дону </span>
                        <span className="title-2">/</span>
                        <span className="title-2" style={{color: "red"}}> Стоимость доставки</span>
                    </div>
                    <div className="text-container">
                        <div style={{maxWidth: "58%"}}><h1 className="title">Доставляем товары по Ростову-на-Дону!</h1></div>


                    </div>

                    <img src={dostavka} alt="delivery" className="image-1" />
                </div>
            </div>
        </div>
    );
};

export default Home;