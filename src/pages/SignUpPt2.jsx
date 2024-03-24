import React from 'react';
import './SignUpPt2.css'
import {useState} from "react";

const SecondPart = () => {

        const [text, setText] = useState('');
        const maxCharacters = 2000; // Максимальное количество символов

        const handleInputChange = (e) => {
            const inputValue = e.target.value;

            if (inputValue.length <= maxCharacters) {
                setText(inputValue);
            }
        };


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
                        // value={email}

                    />
                    {/*<label >*/}
                    {/*    Email*/}
                    {/*</label>*/}
                </div>
                <div className='email'>
                    <input type="password"
                           autoComplete="new-password"
                           required

                    />
                    {/*<label className={email ? 'placeholder filled' : 'placeholder'}>Пароль</label>*/}
                </div>
                <div className='email'>
                    <input type="password"
                           autoComplete="new-password"
                           required

                    />
                    {/*<label className={email ? 'placeholder filled' : 'placeholder'}>Пароль</label>*/}
                </div>
                <div className='email'>
                    <input
                            className='big'
                            type="password"
                           autoComplete="new-password"
                           required
                            onChange={handleInputChange}
                    />
                    <p>  {text.length} / {maxCharacters} </p>
                    {/*<label className={email ? 'placeholder filled' : 'placeholder'}>Пароль</label>*/}
                </div>
                <button className='btn1'>
                   Продолжить
                </button>

            </form>
        </div>
    );
};

export default SecondPart;
