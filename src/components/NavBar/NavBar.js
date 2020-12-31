import './NavBar.css';

import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import ReactTooltip from 'react-tooltip';

function NavBar(props) {
	// State for displaying the menu (toggling the menu when in mobile mode)
	const [isToggled, toggle] = useState(false);
	// Toogle the menu when user click the toggle button
	const toggleMenu = () => {
		toggle(!isToggled);
	};
	return (
		<header className='nav-bar fixed w-full top-0 animated z-40 md:px-16 px-6 md:flex md:items-center md:justify-between py-2'>
			<div className='flex items-center justify-between'>
				<div className='flex-1 flex items-center'>
					<img
						className='h-12 rounded-full md:hidden block '
						src={props.navbarPic}
						alt='profile-picture'
					/>
					<h1 className='text-2xl font-serif font-semibold text-white mx-2 md:block hidden'>
						Bao Luong
					</h1>
				</div>
				{/* Hide the menu toggle button when screen size is big */}
				<div className='md:hidden'>
					<button
						className='h-10 w-10 text-white'
						onClick={toggleMenu}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					</button>
				</div>
			</div>
			{/* If isToggle == true && screen size is not large, render the toggle menu */}
			{/* Otherwise hide the toggle menu */}
			<div className={isToggled ? 'md:block ' : 'md:block hidden'}>
				<nav className='flex items-center justify-center'>
					<NavHashLink
						smooth
						to='#top'
						className='md:px-5 md:py-1 px-2 block text-white hover:bg-gray-700 rounded'
						activeClassName='border-b-2 border-transparent border-white'
					>
						<button
							className='text-white h-8 w-8'
							data-tip
							data-for='homeTooltip'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
							</svg>
						</button>
						<ReactTooltip
							id='homeTooltip'
							place='bottom'
							type='dark'
							effect='solid'
						>
							Home
						</ReactTooltip>
					</NavHashLink>
					<NavHashLink
						smooth
						to='#about-me'
						className='md:px-5 md:py-1 px-2 block text-white hover:bg-gray-700 rounded'
						activeClassName='border-b-2 border-transparent border-white'
					>
						<button
							className='text-white h-8 w-8'
							data-tip
							data-for='aboutMeTooltip'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
						<ReactTooltip
							id='aboutMeTooltip'
							place='bottom'
							type='dark'
							effect='solid'
						>
							About Me
						</ReactTooltip>
					</NavHashLink>
					<NavHashLink
						smooth
						to='#projects'
						className='md:px-5 md:py-1 px-2 block text-white hover:bg-gray-700 rounded'
						activeClassName='border-b-2 border-transparent border-white'
					>
						<button
							className='text-white h-8 w-8'
							data-tip
							data-for='projectsTooltip'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z'
									clipRule='evenodd'
									q
								/>
							</svg>
						</button>
						<ReactTooltip
							id='projectsTooltip'
							place='bottom'
							type='dark'
							effect='solid'
						>
							Projects
						</ReactTooltip>
					</NavHashLink>
					<NavHashLink
						smooth
						to='#contact-me'
						className='md:px-5 md:py-1 px-2 block text-white hover:bg-gray-700 rounded'
						activeClassName='border-b-2 border-transparent border-white'
					>
						<button
							className='text-white h-8 w-8'
							data-tip
							data-for='contactMeTooltip'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
								/>
							</svg>
						</button>
						<ReactTooltip
							id='contactMeTooltip'
							place='bottom'
							type='dark'
							effect='solid'
						>
							Contact Me
						</ReactTooltip>
					</NavHashLink>
				</nav>
			</div>
		</header>
	);
}

export default NavBar;
