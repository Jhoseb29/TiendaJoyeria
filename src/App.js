import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import LoadingScreen from './components/LoadingScreen';
import Notification from './components/Notification';
import { useSelector } from 'react-redux';
import SingUp from './Pages/SingUp';
import ProtectedPages from './Pages/ProtectedPages';
import Cart from './Pages/Cart';
import Home from './Pages/Home';


function App() {

  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="App">
  
        {isLoading && <LoadingScreen />}
        <Notification message={Notification} />
        <Routes>
          {/* {Rutas Publicas} */}
          <Route path='/login' element={<Login />} />
          <Route path='/singup' element={<SingUp />} />
          {/* {Rutas Privadas} */}
          <Route element={<ProtectedPages />} >
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
