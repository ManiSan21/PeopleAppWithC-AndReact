import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
        <h1>People App</h1>
        <Link to="/" style={linkStyle}>Home</Link> | <Link to="/index" style={linkStyle}>Tasks</Link>
    </header>
  )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}