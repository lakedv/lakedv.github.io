import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
	return (
		<nav className='two columns navbar'>
			<ul>
				<li>
				<Link class='active' to="/"><FontAwesomeIcon icon={faHouseUser} size="5x" /></Link>
				</li>
				<li>
					<Link to="/Projects"><FontAwesomeIcon icon={faFolderOpen} size="5x" /></Link>
				</li>
				<li>
					<Link to="/About"><FontAwesomeIcon icon={faAddressCard} size="5x" /></Link>
				</li>
				<li>
				<Link to="/Contact"><FontAwesomeIcon icon={faEnvelope} size="5x" /></Link>
				</li>
			</ul>
		</nav>
	);
};