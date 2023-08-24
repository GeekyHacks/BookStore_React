import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/Books/Books';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/Css/App.css';

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
          </div>
        </nav>

        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<div className="notFound"> Page not found!! </div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
