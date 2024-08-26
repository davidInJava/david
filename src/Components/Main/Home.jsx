import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import dostavka from '../../source/img/Доставка.png';
import mobile from '../../source/img/mobile.png';
import speed from '../../source/img/speed.png'
const Home = () => {
    return (
        <div className="home-page">
            <Header/>
            <div className="home-content-1">
                <div className="home-content-1-1">
                    <div style={{backgroundColor: "#fcf1e0", padding: "20px", borderRadius: "10px", marginTop: "20px"}}>
                        <div className="text-container-2">
                            <span className="title-2">Курьерская служба </span>
                            <span className="title-2">/</span>
                            <span className="title-2"> Доставка по Ростову-на-Дону </span>
                            <span className="title-2">/</span>
                            <span className="title-2" style={{color: "red"}}> Стоимость доставки</span>
                        </div>
                        <div className="text-container">
                            <div style={{maxWidth: "58%", marginTop: "10%"}}>
                                <h1 className="title"
                                    style={{jusifyContent: "center", display: "flex", alignItems: "center"}}>Доставляем
                                    товары по Ростову-на-Дону!</h1>
                                {/* Добавляем кнопку в новом div */}
                                <div className="button-container" style={{marginTop: "5%"}}>
                                    <button className="btn">

                                        <span>Заказать доставку</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img src={dostavka} alt="delivery" className="image-1"/>

                    <div className="text-container-3">
                        <div className="text-container-3-1">
                            Почему мы
                        </div>

                        <div className="text-container-3-2">


                            <div className="text-container-3-2-1">
                                <div><img src={mobile}/></div>
                                <span>Мобильность</span>

                                <p>
                                    Мы всегда готовы предложить самую выгодную цену на доставку товаров по
                                    Ростову-на-Дону.
                                </p>
                            </div>

                            <div className="text-container-3-2-2">
                                <div><img src={speed}/></div>
                                <span>До <strong>2</strong> часов</span>

                                <p>
                                    Доставим товар в течение 2 часов с момента принятия заказа.
                                </p>
                            </div>

                            <div className="text-container-3-2-3">
                                <div><img src={mobile}/></div>
                                <span>Цены</span>

                                <p>
                                    У нас вы можете заказать доставку дешево
                                </p>
                            </div>

                            <div className="text-container-3-2-4">
                                <div><img src={mobile}/></div>
                                <span>Безопасность</span>

                                <p>
                                    С нами вы можете не волноваться о сохранности товара
                                </p>
                            </div>


                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;