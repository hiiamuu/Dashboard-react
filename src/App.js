// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
