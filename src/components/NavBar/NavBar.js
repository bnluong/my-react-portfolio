import './NavBar.css';

import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';

function NavBar() {
	return (
		<div className='NavBar'>
			<h1>NavBar</h1>
			<BrowserRouter>
				<ul>
					<li>
						<NavHashLink
							smooth
							to='#top'
							activeClassName='selected'
						>
							Home
						</NavHashLink>
					</li>
					<li>
						<NavHashLink
							smooth
							to='/#about-me'
							activeClassName='selected'
						>
							About Me
						</NavHashLink>
					</li>
					<li>
						<NavHashLink
							smooth
							to='/#projects'
							activeClassName='selected'
						>
							Projects
						</NavHashLink>
					</li>
					<li>
						<NavHashLink
							smooth
							to='/#contact-me'
							activeClassName='selected'
						>
							Contact Me
						</NavHashLink>
					</li>
				</ul>
			</BrowserRouter>
		</div>
	);
}

export default NavBar;
