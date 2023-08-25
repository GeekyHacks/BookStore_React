import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/Css/App.css';
import accountPic from './assets/images/account-circle.svg';

function App() {
  return (
    <div className="fullWebsite">
      <div className="App">
        <nav className="navBar">
          <Link className="bookstoreTitle" to="/">
            Geeky Book Store
          </Link>
          <div className="navLinks">
            <Link className="link" to="/books">
              Books
            </Link>
            <Link className="link" to="/categories">
              Categories
            </Link>
            <Link className="link" to="/contact">
              Contact
            </Link>
            <Link className="bookstoreTitle" to="/">
              <img className="accountPic" src={accountPic} alt="" />
            </Link>
          </div>
        </nav>

        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<MainContainer />} />
          <Route path="/books" element={<MainContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<div className="notFound"> Page not found!! </div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
