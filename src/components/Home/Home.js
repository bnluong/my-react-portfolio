import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Home(props) {
	return (
		<div className='flex flex-col h-screen justify-center px-10 sm:mt-0 mt-52'>
			<div className='flex flex-col sm:items-start items-center text-center px-10 py-5 '>
				<h1 className='text-lg font-semibold'>
					{'>_ std::cout << "Hello world!" << std::endl'}
				</h1>
			</div>
			<div className='sm:flex flex-row py-5 px-5'>
				<div className='flex flex-col px-5 items-center'>
					<img
						src={props.profilePic}
						alt=''
						className='rounded-full sm:w-full w-36'
					/>
					<div className='flex flex-row py-3 '>
						<SocialIcon
							url='https://linkedin.com/in/bao-luong'
							bgColor='#282c34'
							style={{
								maxWidth: 40,
								maxHeight: 40,
								marginRight: '1rem',
								marginLeft: '1rem',
							}}
						/>
						<SocialIcon
							url='https://github.com/bnluong'
							bgColor='#282c34'
							style={{
								maxWidth: 40,
								maxHeight: 40,
								marginRight: '1rem',
								marginLeft: '1rem',
							}}
						/>
					</div>
				</div>
				<div className='flex flex-col sm:items-start items-center text-center px-5'>
					<h1 className='text-3xl font-bold'>
						My name is Bao Luong.
					</h1>
					<h1 className='text-base sm:text-xl font-light sm:text-left text-center pt-3'>
						I'm a new graduate with a BS in Computer Science from UC
						Irvine. I'm passionate about making high quality and
						impactful software with a creative problem solving
						mindset. I'm currently on a lookout for a SWE position
						to utilize what I have learned and to further my skills.
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
	);
}

export default Home;
