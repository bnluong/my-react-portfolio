import React from 'react';

import ContactForm from './ContactForm';

function Contact() {
	return (
		<div
			className='flex items-center justify-center min-h-screen pt-36'
			id='contact-me'
		>
			<div className='lg:mx-36 md:mx-12 mx-6 w-full lg:text-lg text-justify'>
				<div className='heading'>
					<h1 className='text-2xl font-bold uppercase'>Contact</h1>
				</div>
				<div className='lg:mt-9 mt-6'>
					Thank you for visiting my website. I love to connect with
					people to share my passion whether it's about life or work.
				</div>
				<div className='lg:mt-9 mt-6'>
					I'm currently looking for a full-time opporturnity in
					Software Development Engineering. Please don't hesitate to
					contact me should you are looking for a candidate.
				</div>
				<div className='lg:mt-9 mt-6'>
					Drop me a line at my{' '}
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
					. Or use the form below to send me a message directly.
				</div>
				<ContactForm />
			</div>
		</div>
	);
}

export default Contact;
