import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import gruzovik from '../../source/img/gruzovik2.jpg';
import Carousel from '../Carousel/Image'
import whatsapp from '../../source/img/whatsapp.png';
import vk from '../../source/img/vk.png';
const HomePage = () => {
    return (<div className="home-page">
        <Header/>
        <div className="content-container">
            <div><Carousel/></div>
            <div className="text">
                <div className="about-container" style={{marginTop: '20px'}}>
                    <div className="about-title">
                        <span style={{color: '#d58500'}}>О</span> нас
                    </div>
                    <div className="about-content">
                        Dostavka-na-Donu – ваш надежный партнер по доставке товаров в Ростове-на-Дону. Забудьте о
                        хлопотах с
                        доставкой! Мы предлагаем комплексные решения для любых нужд, будь то доставка продуктов, цветов,
                        подарков, документов или перевозка негабаритных грузов, строительных материалов, оборудования и
                        т.д.
                        Наши опытные курьеры и водители знают город как свои карманы, гарантируя безопасную и
                        своевременную
                        доставку. Мы предлагаем разные варианты доставки, учитывая ваши потребности, и конкурентные
                        цены.
                    </div>
                </div>
                <div className="about-container" style={{marginTop: '20px'}}>
                    <div className="about-title">
                        <span style={{color: '#d58500'}}>Важно!</span></div>
                    <div className="about-content">
                        Наш сайт сейчас в разработке, но мы уже готовы помочь вам с доставкой! Свяжитесь с нами по
                        телефону
                        +7-(919)-898-11-74, чтобы воспользоваться нашими услугами.
                    </div>

                </div>
                <div className="about-container-2" style={{marginTop: '20px'}}>

                    <a href="https://wa.me/79198981174" style={{paddingRight: '10px'}}>
                        <img src={whatsapp} alt="Описание изображения"/>
                    </a>

                    <a href="https://vk.com/fromabovyan" style={{paddingRight: '10px'}}>
                        <img src={vk} alt="Описание изображения"/>
                    </a>
                </div>
            </div>
            <div>Это проверка</div>

        </div>
    </div>);
};

export default HomePage;