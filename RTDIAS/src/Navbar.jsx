import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem' }}>Logo</Link>
      </div>
      <div>
        <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
        <Link to="/login" style={{ margin: '0 10px', color: 'white' }}>Login</Link>
        <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
