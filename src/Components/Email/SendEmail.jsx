import {send} from 'emailjs-com';
import {useState} from "react";
import './SendEmail.css'; // Импорт файла CSS

function SendEmail() {
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
        const {name, value} = e.target;
        setToSend({...toSend, [name]: value});
        const error = validateField(name, value);
        setErrors({...errors, [name]: error});
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
                console.log('SUCCESS!', response.status, response.text);
                alert('Сообщение успешно отправлено!');
                setToSend({
                    from_name: '',
                    to_name: 'mangasaryangeneral@gmail.com',
                    message: '',
                    reply_to: '',
                });
                setErrors({from_name: '', reply_to: ''});
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert('Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.');
            });
    };

    return (
        <div>
            <div className="container">


                <form onSubmit={onSubmit} className="form">
                    <div className="form-group">
                        <input
                            type='text'
                            style={{width: '80%'}}
                            name='reply_to'
                            value={toSend.reply_to}
                            onChange={handleChange}
                            className={`form-control ${errors.reply_to ? 'is-invalid' : ''}`}
                        />
                        <label htmlFor="reply_to" className="label">Ваш электронный адрес</label>
                        {errors.reply_to && (
                            <div className="invalid-feedback">{errors.reply_to}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            type='text'
                            style={{width: '80%'}}
                            name='from_name'
                            value={toSend.from_name}
                            onChange={handleChange}
                            className={`form-control ${errors.from_name ? 'is-invalid' : ''}`}
                        />
                        <label htmlFor="from_name" className="label">Имя отправителя</label>
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
                    />
                        <label htmlFor="message" className="label">Ваше сообщение</label>
                    </div>
                    <button type='submit' className="btn btn-primary">Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default SendEmail;