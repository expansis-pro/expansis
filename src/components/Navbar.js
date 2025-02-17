// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className='navbar'>
			<h2>Expansis Pro</h2>
			<button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
				☰
			</button>

			<ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
				<li>
					<Link to='/' onClick={() => setMenuOpen(false)}>
						Inicio
					</Link>
				</li>
				<li>
					<Link to='/about' onClick={() => setMenuOpen(false)}>
						Quiénes Somos
					</Link>
				</li>
				<li>
					<Link to='/services' onClick={() => setMenuOpen(false)}>
						Servicios
					</Link>
				</li>
				<li>
					<Link to='/contact' onClick={() => setMenuOpen(false)}>
						Contacto
					</Link>
				</li>
				{/* <li>
					<Link to='/testimonials' onClick={() => setMenuOpen(false)}>
						Testimonios
					</Link>
				</li> */}
			</ul>
		</nav>
	);
};

export default Navbar;
