import React from 'react';

function Contact() {
	return (
		<div
			className='flex items-center justify-center lg:pt-0 pt-36'
			id='contact-me'
		>
			<div className='mx-3 md:mx-12 lg:mx-36 w-full lg:text-lg text-justify'>
				<div className='heading'>
					<h1 className='text-2xl font-bold uppercase'>Contact</h1>
				</div>
				<div className='lg:mt-12 mt-6'>
					Thank you for visiting my website. I love to connect with
					people to share my passion whether it's about life or work.
				</div>
				<div className='lg:mt-12 mt-6'>
					Drop my a line at my{' '}
					{
						<a
							href='mailto:bnluong@uci.edu'
							className='text-blue-500 underline'
						>
							email
						</a>
					}
					. I can also be reached on{' '}
					{
						<a
							href='https://www.linkedin.com/in/bao-luong/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500 underline'
						>
							LinkedIn
						</a>
					}
					.
				</div>
				<div className='lg:mt-12 mt-6'>
					I'm currently looking for a full-time opporturnity in
					Software Development Engineering. Please don't hesitate to
					contact me should you are looking for a candidate.
				</div>
			</div>
		</div>
	);
}

export default Contact;
