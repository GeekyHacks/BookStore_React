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
          <Link className="bookstoreTitle" to="/geekybookstore/">
            Geeky Book Store
          </Link>
          <div className="navLinks">
            <Link className="link" to="/geekybookstore/books">
              Books
            </Link>
            <Link className="link" to="/geekybookstore/categories">
              Categories
            </Link>
            <Link className="link" to="/geekybookstore/contact">
              Contact
            </Link>
            <Link className="bookstoreTitle" to="/geekybookstore/">
              <img className="accountPic" src={accountPic} alt="" />
            </Link>
          </div>
        </nav>

        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/geekybookstore/" element={<MainContainer />} />
          <Route path="/geekybookstore/books" element={<MainContainer />} />
          <Route path="/geekybookstore/contact" element={<Contact />} />
          <Route path="/geekybookstore/*" element={<div className="notFound"> Page not found!! </div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
