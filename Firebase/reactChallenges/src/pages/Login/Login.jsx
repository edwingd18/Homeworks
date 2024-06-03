import styles from './Login.module.css'
import { useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { loginUser, cerrarSesion,loginGoogle } from '../../redux/slices/auth/Thunks';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase/config';
import { Link } from 'react-router-dom';
import {checkingCredentials} from '../../redux/slices/auth/AuthSlice'
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

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
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //dispatch({type: 'LOGIN', payload: {email}})
        dispatch(loginUser(email,password))
        setEmail('');
        setPassword('');
    }

    const signOut = async () => {
        dispatch(cerrarSesion());
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
                    <label htmlFor="formulario"> Login</label>
                    <form name="formulario" action="" onSubmit={handleSubmit}>

                        <input type="email" name="email" placeholder='email' value={email} onChange={onChangeEmail} required/>

                        <input type="password" name="password" placeholder='contraseña' value={password} onChange={onChangePassword} required/>

                        <button type="submit" disabled={status}>Iniciar sesión</button>
                        <button onClick={loginConGoogle}>Login con google</button>
                        <button type='button' onClick={signOut}>Cerrar sesión</button>
                        <div style={{display:"flex",justifyContent:'center'}}>
                            <Link className={styles.registro} to="/registro">Registrarse</Link>  
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}