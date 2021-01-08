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
		<header className='nav-bar fixed w-full top-0 animated z-40 md:px-16 px-6 py-3 md:flex md:items-center md:justify-between shadow border-b-2 border-gray-500 bg-white'>
			<div className='flex items-center justify-between'>
				<div className='flex-1 flex items-center'>
					<NavHashLink
						smooth
						to='#top'
						className=''
						activeClassName=''
					>
						<h1 className='text-2xl font-bold md:block hidden'>
							Bao Luong
						</h1>
						<img
							className='h-10 w-10 rounded-full md:hidden'
							src={props.navbarPic}
							alt='navbar-picture'
						/>
					</NavHashLink>

					{/* <a href='./resume.pdf' download>
						<button
							className='h-8 w-8'
							data-tip
							data-for='resumeTooltip'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z'
									clipRule='evenodd'
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
					</a> */}
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
			{/* If isToggle == true && screen size is not large, render the toggle menu */}
			{/* Otherwise hide the toggle menu */}
			<div className={isToggled ? 'md:block ' : 'md:block hidden'}>
				<nav className='flex flex-wrap items-center justify-between sm:py-0 py-3'>
					<NavHashLink
						smooth
						to='#top'
						className='block sm:mx-3 uppercase sm:text-basetext-sm hover:border-b-2 hover:border-blue-500'
						activeClassName='border-b-2 border-blue-500 font-semibold'
					>
						Home
					</NavHashLink>
					<NavHashLink
						smooth
						to='#about-me'
						className='block sm:mx-3 uppercase sm:text-base text-sm hover:border-b-2 hover:border-blue-500'
						activeClassName='border-b-2 border-blue-500 font-semibold'
					>
						About Me
					</NavHashLink>
					<NavHashLink
						smooth
						to='#projects'
						className='block sm:mx-3 uppercase sm:text-base text-sm hover:border-b-2 hover:border-blue-500'
						activeClassName='border-b-2 border-blue-500 font-semibold'
					>
						Projects
					</NavHashLink>
					<NavHashLink
						smooth
						to='#contact-me'
						className='block sm:mx-3 uppercase sm:text-base text-sm hover:border-b-2 hover:border-blue-500'
						activeClassName='border-b-2 border-blue-500 font-semibold'
					>
						Contact Me
					</NavHashLink>
				</nav>
			</div>
		</header>
	);
}

export default NavBar;
