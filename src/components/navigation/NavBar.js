import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {
	return (
		<nav>
			<div className='navBar'>
				<div className='homePage'>
					<Link to="/">Home</Link>
				</div>
				<div className='Projects'>
					<Link to="/Projects">Projects</Link>
				</div>
				<div className='aboutMe'>
					<Link to="/About">About me</Link>
				</div>
				<div className='contactMe'>
					<Link to="/Contact">Contact me</Link>
				</div>
			</div>
		</nav>
	);
};