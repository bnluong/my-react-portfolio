import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Home(props) {
	return (
		<div className='flex md:items-center justify-center h-screen md:mt-0 mt-32'>
			<div className='flex flex-col items-center'>
				<h1 className='md:text-lg text-xs font-semibold'>
					{'>_ std::cout << "Hello world!" << std::endl'}
				</h1>
				<img
					src={props.profilePic}
					alt=''
					className='rounded-full md:w-72 w-36 mt-5'
				/>
				<div className='inline-block'>
					<SocialIcon
						url='https://linkedin.com/in/bao-luong'
						bgColor='#282c34'
						style={{
							maxWidth: '2rem',
							maxHeight: '2rem',
							margin: '0.5rem 0.5rem',
						}}
					/>
					<SocialIcon
						url='https://github.com/bnluong'
						bgColor='#282c34'
						style={{
							maxWidth: '2rem',
							maxHeight: '2rem',
							margin: '0.5rem 0.5rem',
						}}
					/>
				</div>
				<h1 className='text-xl font-bold pt-3'>My name is Bao Luong</h1>
				<h1 className='text-sm font-semibold py-3'>
					Aspiring Software Engineer
				</h1>
				<h1 className='px-6'>
					I'm a new graduate with a BS in Computer Science from UC
					Irvine. I'm passionate about making high quality and
					impactful software with a creative problem solving mindset.
					I'm currently on a lookout for a SWE position to utilize
					what I have learned and to further my skills. Let's have a{' '}
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
	);
}

export default Home;
