import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <>
      <Header></Header>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Counter />}
    </>
  );
}

export default App;
