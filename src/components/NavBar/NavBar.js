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
		<header className='nav-bar fixed w-full top-0 animated z-40 md:px-16 px-6 py-2 md:flex md:items-center md:justify-between shadow-md border-b-2 border-gray-500 bg-white'>
			<div className='flex items-center justify-between'>
				<div className='flex-1 flex items-center'>
					<NavHashLink smooth to='#top'>
						<h1 className='text-2xl font-bold font-mono uppercase md:block hidden'>
							Bao Luong
						</h1>
						<img
							className='h-10 w-10 rounded-full md:hidden'
							src={props.navbarPic}
							alt='navbar-pic'
						/>
					</NavHashLink>
				</div>
				{/* Hide the menu toggle button when screen size is big */}
				<div className='md:hidden'>
					<button className='h-10 w-10' onClick={toggleMenu}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
			</div>
			{/* If isToggle == true && screen size is not large, render the toggle menu. Otherwise hide the toggle menu */}
			<div className={isToggled ? 'md:block ' : 'md:block hidden'}>
				<nav className='flex flex-wrap items-center sm:justify-evenly justify-between md:py-0 py-3 font-mono'>
					<NavHashLink
						smooth
						to='#top'
						className='block sm:mx-3 uppercase sm:text-xl text-xs hover:border-b-2 hover:border-blue-500'
						activeClassName='border-b-2 border-blue-500 font-semibold'
					>
						Home
					</NavHashLink>
					<NavHashLink
						smooth
						to='#about-me'
						className='block sm:mx-3 uppercase sm:text-xl text-xs hover:border-b-2 hover:border-blue-500'
						activeClassName='border-b-2 border-blue-500 font-semibold'
					>
						About Me
					</NavHashLink>
					<NavHashLink
						smooth
						to='#projects'
						className='block sm:mx-3 uppercase sm:text-xl text-xs hover:border-b-2 hover:border-blue-500'
						activeClassName='border-b-2 border-blue-500 font-semibold'
					>
						Projects
					</NavHashLink>
					<NavHashLink
						smooth
						to='#contact-me'
						className='block sm:mx-3 uppercase sm:text-xl text-xs hover:border-b-2 hover:border-blue-500'
						activeClassName='border-b-2 border-blue-500 font-semibold '
					>
						Contact
					</NavHashLink>
					<a href={props.resumeLink} download>
						<button
							className='sm:h-8 sm:w-8 h-7 w-7'
							data-tip
							data-for='resumeTooltip'
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
									d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
								/>
							</svg>
						</button>
						<ReactTooltip
							id='resumeTooltip'
							place='bottom'
							type='dark'
							effect='solid'
						>
							Résumé
						</ReactTooltip>
					</a>
				</nav>
			</div>
		</header>
	);
}

export default NavBar;
