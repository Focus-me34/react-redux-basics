import classes from './Header.module.css';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../store/reducers/authSlice';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const logOutHandler = useCallback((e) => {
    e.preventDefault();
    dispatch(logOut())
  }, [])


  const loggedInContent = <ul>
    <li>
      <a href='/'>My Products</a>
    </li>
    <li>
      <a href='/'>My Sales</a>
    </li>
    <li>
      <button onClick={logOutHandler}>Logout</button>
    </li>
  </ul>

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isLoggedIn && loggedInContent }
      </nav>
    </header>
  );
};

export default Header;
