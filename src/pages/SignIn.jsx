import './dealer.svg'
import './signIn.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase/firebase";



export const SignIn =({user}) => {
    const [email, setEmail] = useState(''); // Состояние для email
    const [ password, setPassword] = useState(''); // Состояние для пароля
    const [buttonColor, setButtonColor] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (user) =>{
        // if(!email || !password) return;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // navigate('/SignUp');
                // navigate('/Main');
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

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
            console.log('btn')
        } else {
            setButtonColor('');
        }
    };

    const handleLoginClick = () => {
        navigate('/'); // Переход на страницу /SignIn.jsx при клике на кнопку
    };
    //
    // const handleLoginClickPr = () => {
    //     navigate('/Main'); // Переход на страницу /SignIn.jsx при клике на кнопку
    // };
    return (
        <div>
                <form className='regForm'>
                    <img src={require('./dealer.svg').default} alt='logo' className='img' />
                    <p className='txt1'>Личный кабинет</p>
                    <p className='txt2'>Введите e-mail и придумайте пароль</p>
                    <div className='email'>
                        <input
                            autoComplete='username'
                            type="email"
                            className="/"
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <label className={email ? 'placeholder filled' : 'placeholder'}>
                            Email
                        </label>
                    </div>
                    <div className='email'>
                        <input type="password"
                               autoComplete='current-password'
                               className="/"
                               required
                               onChange={handlePasswordChange}
                        />
                        <label className={email ? 'placeholder filled' : 'placeholder'}>Пароль</label>
                    </div>
                    <button className='btn1' style={{ backgroundColor: buttonColor }} onClick={handleSignIn} >
                        Войти
                    </button>
                    <button className='btn2' onClick={handleLoginClick}>Еще нет аккаунта? Зарегистрироваться</button>
                </form>
        </div>
    );
};

export default SignIn