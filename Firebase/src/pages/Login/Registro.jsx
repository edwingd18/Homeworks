import styles from './Login.module.css'
import { useState,useMemo } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { registerUser,loginGoogle } from '../../redux/slices/auth/Thunks';
import {useSelector} from 'react-redux'
import { auth } from '../../firebase/config';
import { useDispatch } from 'react-redux';


export const Registro = () =>{


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useMemo(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            dispatch(checkingCredentials({ status: true, email: user.email }));
          } else {
            dispatch(checkingCredentials({ status: false, email: null }));
          }
        });
        return () => unsubscribe();
      }, []);

    const { status } = useSelector(state => state.auth)
    console.log(status)
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(registerUser(email,password))
        setEmail('');
        setPassword('');
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const loginConGoogle = async() => {
        dispatch(loginGoogle())
    }

  return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <label htmlFor="formulario"> Registro</label>
                    <form name="formulario" action="" onSubmit={handleSubmit}>

                        <input type="email" name="email" placeholder='email' value={email} onChange={onChangeEmail} required/>

                        <input type="password" name="password" placeholder='contraseña' value={password} onChange={onChangePassword} required/>
                        
                        <button type="submit" disabled={status}>Registrarse</button>
                        <button onClick={loginConGoogle}>Login con google</button>
                        <div style={{display:"flex",justifyContent:'center'}}>
                            <a className={styles.registro} href="/">Volver al login</a>  
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}