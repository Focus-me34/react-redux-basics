import classes from './Auth.module.css';
import { logIn } from '../store/reducers/authSlice';
import { useRef,useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Auth = () => {
  const email = useRef();
  const password = useRef();
  const failed = useSelector(state => state.auth.failed)
  const dispatch = useDispatch();

  const logInHandler = useCallback((e) => {
    e.preventDefault();
    dispatch(logIn({ email: email.current.value, password: password.current.value }))
    email.current.value = ""
    password.current.value = ""
  }, [])

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={email} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={password} />
          </div>
          {failed && <p>Make sure your inputs are valid</p>}
          <button onClick={logInHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
