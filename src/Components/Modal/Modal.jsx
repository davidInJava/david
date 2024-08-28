import React, { useState } from 'react';
import './Modal.css'; // Импортируем стили
import { send } from "emailjs-com";

const Modal = ({ isOpen, onClose }) => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'mangasaryangeneral@gmail.com',
        message: '',
        reply_to: '',
    });
    const [errors, setErrors] = useState({
        from_name: '',
        reply_to: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setToSend({ ...toSend, [name]: value });
        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const validateField = (field, value) => {
        if (field === 'from_name' && value.trim() === '') {
            return 'Имя отправителя не может быть пустым';
        } else if (field === 'reply_to' && !/\S+@\S+\.\S+/.test(value)) {
            return 'Некорректный адрес электронной почты';
        }
        return '';
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (errors.from_name || errors.reply_to) {
            return;
        }
        send(
            'service_1b0z6jp', // Замените на ваш ID сервиса
            'template_tewwy8u', // Замените на ваш ID шаблона
            toSend,
            'mpBHbNC_Lf66eVh43' // Замените на ваш ID пользователя
        )
            .then((response) => {
                onClose();
                console.log('SUCCESS!', response.status, response.text);
                alert('Сообщение успешно отправлено!');
                setToSend({
                    from_name: '',
                    to_name: 'mangasaryangeneral@gmail.com',
                    message: '',
                    reply_to: '',
                });
                setErrors({ from_name: '', reply_to: '' });
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert('Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.');
            });
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Обратная связь</h2>
                <form onSubmit={onSubmit} className="form">
                    <div className="form-group">
                        <input
                            type='text'
                            name='reply_to'
                            value={toSend.reply_to}
                            onChange={handleChange}
                            className={`form-control ${errors.reply_to ? 'is-invalid' : ''}`}
                            placeholder="Ваш электронный адрес"
                        />
                        {errors.reply_to && (
                            <div className="invalid-feedback">{errors.reply_to}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            type='text'
                            name='from_name'
                            value={toSend.from_name}
                            onChange={handleChange}
                            className={`form-control ${errors.from_name ? 'is-invalid' : ''}`}
                            placeholder="Имя отправителя"
                        />
                        {errors.from_name && (
                            <div className="invalid-feedback">{errors.from_name}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            value={toSend.message}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ваше сообщение"
                        />
                    </div>
                    <button type='submit' className="btn1 btn-primary">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;