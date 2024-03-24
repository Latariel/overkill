import './signUp.css'
import './dealer.svg'
import {useState} from "react";
import { useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword
        } from 'firebase/auth'
// import { useHistory } from 'react-router-dom'
import {auth} from "../firebase/firebase";

export const SignUp = () => {

    const [email, setEmail] = useState(''); // Состояние для email
    const [password, setPassword] = useState(''); // Состояние для пароля
    const [buttonColor, setButtonColor] = useState('');
    const navigate = useNavigate();


    const handleSignUp = () => {
        // if (!email || !password) return;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
               console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };




        const handleEmailChange = (e) => {
            setEmail(e.target.value);
            updateButtonColor(e.target.value, password);
        };

        const handlePasswordChange = (e) => {
            setPassword(e.target.value);
            updateButtonColor(email, e.target.value);
        };

        const updateButtonColor = (emailValue, passwordValue) => {
            if (emailValue.trim() !== '' && passwordValue.trim() !== '') {
                setButtonColor('rgba(250, 132, 70, 1)');
            } else {
                setButtonColor('');
            };
        }

    const handleLoginClick = () => {
        navigate('/SingIn'); // Переход на страницу /SignIn.jsx при клике на кнопку
    };


        // if (user) {
        //     return <Navigate to='/SignUp'></Navigate>
        // }

        // const handleSignUpPt2Click = () =>{
        //     navigate('/SignUp')
        // }

        return (
            <div>
                <form className='regForm'>
                    <img src={require('./dealer.svg').default} alt='logo' className='img'/>
                    <p className='txt1'>Личный кабинет</p>
                    <p className='txt2'>Введите e-mail и придумайте пароль</p>
                    <div className='email'>
                        <input
                            type="email"
                            required
                            autoComplete='username'
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <label className={email ? 'placeholder filled' : 'placeholder'}>
                            Email
                        </label>
                    </div>
                    <div className='email'>
                        <input type="password"
                               autoComplete="new-password"
                               required
                               onChange={handlePasswordChange}
                        />
                        <label className={email ? 'placeholder filled' : 'placeholder'}>Пароль</label>
                    </div>
                    <button className='btn1' style={{backgroundColor: buttonColor}} onClick={handleSignUp}>
                        Зарегистрироваться
                    </button>
                    <button className='btn2'  onClick={handleLoginClick}>  Уже есть аккаунт? Войти</button>
                </form>
            </div>
        );
    };
//
export default SignUp;