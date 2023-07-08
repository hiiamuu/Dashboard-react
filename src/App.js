// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/pages/userList/UserList.js';
import User from './components/pages/user/User.js';


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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
