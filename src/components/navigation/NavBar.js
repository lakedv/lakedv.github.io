import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
	return (
		<nav className='two columns container navbar'>
			<ul>
				<li>
					<Link class='active' to="/"><FontAwesomeIcon icon={faHouseUser} size="3x" /><span className='link-text'>Home</span></Link>
				</li>
				<li>
					<Link to="/Projects"><FontAwesomeIcon icon={faFolderOpen} size="3x" /><span className='link-text'>Projects</span></Link>
				</li>
				<li>
					<Link to="/About"><FontAwesomeIcon icon={faAddressCard} size="3x" /><span className='link-text'>About me</span></Link>
				</li>
				<li>
					<Link to="/Contact"><FontAwesomeIcon icon={faEnvelope} size="3x" /><span className='link-text'>Contact me</span></Link>
				</li>
			</ul>
		</nav>
	);
};