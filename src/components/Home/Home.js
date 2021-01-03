import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Home(props) {
	return (
		<div className='flex md:items-center justify-center min-h-screen md:mt-0 mt-32'>
			<div className='flex md:flex-row md:flex-wrap flex-col items-center'>
				<div className='flex md:w-full md:justify-center md:mb-12'>
					<h1 className='md:text-2xl text-xs font-mono font-extralight'>
						{'>_ std::cout << "Hello world!" << std::endl'}
					</h1>
				</div>
				<div className='flex md:flex-row flex-col'>
					<div className='flex flex-col items-center'>
						<img
							src={props.profilePic}
							alt=''
							className='md:rounded-3xl shadow-xl md:w-8/12 rounded-full w-36 mt-5'
						/>
					</div>
					<div className='flex flex-col md:w-full md:items-start items-center md:mx-5 font-sans'>
						<h1 className='md:text-4xl text-xl font-bold pt-3'>
							My name is Bao Luong
						</h1>
						<h1 className='text-xl font-semibold py-3'>
							Aspiring Software Engineer
						</h1>
						<div className='inline-block pb-3'>
							<SocialIcon
								url='https://linkedin.com/in/bao-luong'
								bgColor='#d1d5db'
								style={{
									maxWidth: '2.5rem',
									maxHeight: '2.5rem',
									marginTop: '0.5rem',
									marginBottom: '0.5rem',
									marginRight: '0.5rem',
								}}
							/>
							<SocialIcon
								url='https://github.com/bnluong'
								bgColor='#d1d5db'
								style={{
									maxWidth: '2.5rem',
									maxHeight: '2.5rem',
									margin: '0.5rem 0.5rem',
								}}
							/>
							<SocialIcon
								url='mailto:bnluong@uci.edu'
								bgColor='#d1d5db'
								style={{
									maxWidth: '2.5rem',
									maxHeight: '2.5rem',
									margin: '0.5rem 0.5rem',
								}}
							/>
						</div>
						<h1 className='md:px-0 px-6 md:py-6 md:text-lg'>
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
