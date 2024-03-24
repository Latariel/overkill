import React from 'react';
import './SignUpPt2.css'
import {useState} from "react";

const SecondPart = () => {

        const [text, setText] = useState('');
        const [name, setName] = useState('');
        const [nameProd, setNameProd] = useState('');
        const [buttonColor, setButtonColor] = useState('');
        const maxCharacters = 2000; // Максимальное количество символов

        const handleInputChange = (e) => {
            const inputValue = e.target.value;

            if (inputValue.length <= maxCharacters) {
                setText(inputValue);
            }
        };

    const handleNameChange = (e) => {
        setName(e.target.value);
        updateButtonColor(e.target.value, name);

        const inputValue = e.target.value;

        if (inputValue.length <= maxCharacters) {
            setText(inputValue);
        }

    };

    const handleNameProdChange = (e) => {
        setNameProd(e.target.value);
        updateButtonColor(nameProd, e.target.value);
    };

    const updateButtonColor = (nameValue, passwordValue) => {
        if (nameValue.trim() !== '' && passwordValue.trim() !== '') {
            setButtonColor('rgba(250, 132, 70, 1)');
        } else {
            setButtonColor('');
        };
    }


    return (
        <div>
            <form className='regForm2'>
                <img src={require('./dealer.svg').default} alt='logo' className='img'/>
                <p className='txt1'>Регистрация</p>
                <div className='email'>
                    <input
                        type="email"
                        required
                        autoComplete='username'
                        onChange={handleNameChange}
                        // value={text}

                    />
                    <label className={text ? 'placeholder filled' : 'placeholder'} >
                        Имя пользователя
                    </label>
                </div>
                <div className='email'>
                    <input type="text"
                           autoComplete="new-password"
                           required
                           onChange={handleNameProdChange}
                    />
                    <label className={text ? 'placeholder filled' : 'placeholder'}>Название проекта</label>
                </div>
                <div className='email'>
                    <input type="text"
                           autoComplete="new-password"
                           required

                    />
                    <label className={text ? 'placeholder filled' : 'placeholder'}>Идентификатор проекта</label>
                </div>
                <div className='email'>
                    <textarea
                            className='big'
                           autoComplete="new-password"
                           required
                            onChange={handleInputChange}
                    />
                    <p className='length'>  {text.length} / {maxCharacters} </p>
                    <label className={text ? 'placeholder filled' : 'placeholder'}>Описание</label>
                </div>
                <button className='btn1' style={{backgroundColor: buttonColor}}>
                   Продолжить
                </button>

            </form>
        </div>
    );
};

export default SecondPart;
