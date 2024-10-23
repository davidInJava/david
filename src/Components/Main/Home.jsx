import React, {useEffect, useState} from 'react';
import './Home.css';
import Header from '../Header/Header';
import dostavka from '../../source/img/Доставка.png';
import mobile from '../../source/img/mobile.png';
import speed from '../../source/img/speed.png'
import price from '../../source/img/price.png'
import shiled from '../../source/img/shield.png'
import musor from '../../source/img/musor.jpg'
import gruz from '../../source/img/gruz.jpg'
import sborka from '../../source/img/Сборка.jpg'
import snos from '../../source/img/Снос.jpg'
import Modal from '../Modal/Modal'

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
};
const Home = () => {
    const width = useWindowWidth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="home-page">
            <Header/>
            <div className="home-content-1">
                <div className="home-content-1-1">
                    <div style={{backgroundColor: "#fcf1e0", padding: "20px", borderRadius: "10px", marginTop: "20px"}}>
                        {/*<div className="text-container-2">*/}
                        {/*    <span className="title-2">Курьерская служба </span>*/}
                        {/*    <span className="title-2">/</span>*/}
                        {/*    <span className="title-2"> Доставка по Ростову-на-Дону </span>*/}
                        {/*    <span className="title-2">/</span>*/}
                        {/*    <span className="title-2" style={{color: "red"}}> Стоимость доставки</span>*/}
                        {/*</div>*/}
                        <div className="text-container">
                            <div style={{maxWidth: "58%", marginTop: "10%"}}>
                                <h1 className="title"
                                    style={{jusifyContent: "center", display: "flex", alignItems: "center"}}>Доставляем
                                    товары по Ростову-на-Дону!</h1>
                                {/* Добавляем кнопку в новом div */}
                                <div className="button-container" style={{marginTop: "5%"}}>
                                    <button className="btn" onClick={handleOpenModal}>
                                        <span>Заказать доставку</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {width > 768 && <div style={{alignItems: "center", display: "flex", marginTop: "5%"}}>
                        <img src={dostavka} alt="delivery" className="image-1"/>

                    </div>}

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
                                <div><img src={price}/></div>
                                <span>Цены</span>

                                <p>
                                    У нас вы можете заказать доставку дешево
                                </p>
                            </div>

                            <div className="text-container-3-2-4">
                                <div><img src={shiled}/></div>
                                <span>Безопасность</span>

                                <p>
                                    С нами вы можете не волноваться о сохранности товара
                                </p>
                            </div>
                            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

                        </div>


                    </div>


                </div>


                <div className="home-content-1-2">
                    <div className="home-content-1-2-1">
                        <h1 className="title-3"
                            style={{textAlign: "center", color: "#3b3b3b"}}>Наши услуги</h1>
                        <hr style={{
                            backgroundColor: '#545454',
                            border: 'none',
                            height: '1px',
                            width: '80%', marginBottom: "100px"
                        }}/>
                    </div>

                    <div className="home-content-1-2-2">
                        <div className='block-1'>
                            <div>
                                <img className='img-block' src={musor}/>
                            </div>
                            <div>
                                <h1 style={{marginLeft: '10px'}}>Вывоз мусора</h1>
                                <hr style={{
                                    backgroundColor: '#545454',
                                    border: 'none',
                                    height: '1px',
                                    width: '80%',
                                    marginLeft: '10px'
                                }}/>
                            </div>
                            <div style={{margin: '10px', color: '#606060'}}>
                                Выгрузка, доставка, разгрузка строительного мусора
                            </div>

                        </div>
                        <div className='block-1'>
                            <div>
                                <img className='img-block' src={gruz}/>
                            </div>
                            <div>
                                <h1 style={{marginLeft: '10px'}}>Заказать грузчика</h1>
                                <hr style={{
                                    backgroundColor: '#545454',
                                    border: 'none',
                                    height: '1px',
                                    width: '80%',
                                    marginLeft: '10px'
                                }}/>
                            </div>
                            <div style={{margin: '10px', color: '#606060'}}>
                                Разгрузка мебели и других товаров, нашими грузчиками, поможет вам сэкономить силы и
                                время.
                            </div>

                        </div>
                        <div className='block-1'>
                            <div>
                                <img className='img-block' src={sborka}/>
                            </div>
                            <div>
                                <h1 style={{marginLeft: '10px'}}>Сборка мебели</h1>
                                <hr style={{
                                    backgroundColor: '#545454',
                                    border: 'none',
                                    height: '1px',
                                    width: '80%',
                                    marginLeft: '10px'
                                }}/>
                            </div>
                            <div style={{margin: '10px', color: '#606060'}}>
                                Приедем, разберем или соберем мебель за самые короткие сроки.
                            </div>

                        </div>
                        <div className='block-1'>
                            <div>
                                <img className='img-block' src={snos}/>
                            </div>
                            <div>
                                <h1 style={{marginLeft: '10px'}}>Снос зданий</h1>
                                <hr style={{
                                    backgroundColor: '#545454',
                                    border: 'none',
                                    height: '1px',
                                    width: '80%',
                                    marginLeft: '10px'
                                }}/>
                            </div>
                            <div style={{margin: '10px', color: '#606060'}}>
                                Наша компания также занимается сносом зданий, в том числе и дорог.
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;