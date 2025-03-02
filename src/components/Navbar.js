// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation(); // Obtiene la ruta actual

	return (

		<nav className='navbar'>
			<div className={`navbar-padding ${location.pathname === '/' ? 'no-border-bottom' : ''}`}>

				<h2>
					<Link to='/' onClick={() => setMenuOpen(false)} className="navbarH1">
						Expansis Pro
					</Link>
				</h2>
				<button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
					☰
				</button>

				<ul className={`nav-links ${menuOpen ? 'open' : 'close'}`}>
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
			</div>
		</nav>



	);
};

export default Navbar;
