import React from 'react';

import LinkIcon from './LinkIcon';

import './Home.css';

function Home(props) {
	return (
		<div
			className='flex items-center justify-center min-h-screen pt-36 bg-cover bg-fixed bg-center text-gray-200'
			id='home'
			style={{
				backgroundImage: `url(${props.background})`, // Template literals
				backgroundBlendMode: 'multiply',
				backgroundColor: '#404040',
			}}
		>
			<div className='flex flex-col items-center'>
				{/* Refactor later to make this a separate component for animating greeting */}
				<div className='flex flex-row'>
					<div className='border-b-2 border-transparent md:mt-12 mt-8 md:w-6 w-4'></div>
					<h1 className='hello md:text-5xl text-3xl text-center font-mono'>
						{props.greeting}
					</h1>
					<div className='cursor border-b-2 md:mt-12 mt-8 md:w-6 w-4'></div>
				</div>
				{/* End of factoring */}
				<div className='flex flex-col items-center lg:mt-16 mt-6 px-6'>
					<h1 className='lg:text-4xl text-2xl font-bold'>
						{props.subGreeting}
					</h1>
					<h1 className='lg:text-xl mt-2'>{props.title}</h1>
					<div className='flex justify-center lg:mt-16 mt-6'>
						<img
							src={props.profilePic}
							alt='profile-pic'
							className='shadow-xl md:w-72 rounded-full w-36'
						/>
					</div>
					<div className='flex flex-row lg:mt-6 mt-3'>
						{props.socialLinks.map((link, index) => (
							<LinkIcon
								key={index}
								url={link.url}
								fgColor={link.fgColor}
								bgColor={link.bgColor}
								maxWidth={link.maxWidth}
								maxHeight={link.maxHeight}
							/>
						))}
					</div>
					<div className='container mx-auto lg:mt-16 mt-8'>
						<h1 className='lg:px-36 lg:text-xl text-justify'>
							{props.elevatorPitch}
						</h1>
						<h1 className='lg:px-36 lg:text-xl text-justify mt-6'>
							Let's have a{' '}
							<a
								href='mailto:bnluong@uci.edu'
								className='text-blue-500 underline'
							>
								chat
							</a>
							!
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
