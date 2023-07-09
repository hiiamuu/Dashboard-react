// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/pages/userList/UserList.js';
import User from './components/pages/user/User.js';
import NewUser from './components/pages/newUser/NewUser';
import ProductList from './components/pages/productList/ProductList';
import Product from './components/pages/product/Product';
import NewProduct from './components/pages/newProduct/NewProduct';


function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />

          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/newproduct' element={<NewProduct />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
