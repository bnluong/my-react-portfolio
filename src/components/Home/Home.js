import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Home.css';

function Home(props) {
	return (
		<div
			className='flex items-center justify-center min-h-screen md:pt-0 py-24 bg-cover bg-fixed bg-center text-white'
			id='home'
			style={{
				backgroundImage: 'url(./background1.jpg)',
				backgroundBlendMode: 'multiply',
				backgroundColor: '#888888',
			}}
		>
			<div className='flex flex-col items-center'>
				<div className='flex flex-row'>
					<div className='border-b-2 border-transparent md:mt-12 mt-8 md:w-6 w-4'></div>
					<h1 className='hello md:text-5xl text-3xl text-center font-mono'>
						Hello World!
					</h1>
					<div className='cursor border-b-2 md:mt-12 mt-8 md:w-6 w-4'></div>
				</div>
				<div className='flex flex-col items-center lg:mt-16 mt-8 px-6'>
					<h1 className='lg:text-5xl text-2xl font-bold'>
						My name is Bao Luong
					</h1>
					<h1 className='lg:text-2xl mt-1'>
						Aspiring Software Engineer
					</h1>
					<div className='flex justify-center mt-3'>
						<img
							src={props.profilePic}
							alt=''
							className='shadow-xl md:w-72 rounded-full w-36'
						/>
					</div>
					<div className='flex flex-row lg:mt-6 mt-3'>
						<SocialIcon
							url='https://linkedin.com/in/bao-luong'
							fgColor='white'
							style={{
								maxWidth: '2.5rem',
								maxHeight: '2.5rem',
								margin: '0rem .5rem',
							}}
						/>
						<SocialIcon
							url='https://github.com/bnluong'
							fgColor='white'
							style={{
								maxWidth: '2.5rem',
								maxHeight: '2.5rem',
								margin: '0rem .5rem',
							}}
						/>
						<SocialIcon
							url='mailto:bnluong@uci.edu'
							bgColor='#52afd3'
							fgColor='white'
							style={{
								maxWidth: '2.5rem',
								maxHeight: '2.5rem',
								margin: '0rem .5rem',
							}}
						/>
					</div>
					<div className='container mx-auto lg:mt-16 mt-8'>
						<h1 className='lg:px-72 lg:text-xl text-justify'>
							I'm a new graduate with a BS in Computer Science
							from UC Irvine. I'm passionate about making high
							quality and impactful software with a creative
							problem solving mindset. I'm currently on a lookout
							for a SWE position to utilize what I have learned
							and to further my skills. Let's have a{' '}
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
