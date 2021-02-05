import React, { useState } from 'react';

import FormAlert from './FormAlert';

function ContactForm() {
	// State for status of emailjs api calls
	const [status, setStatus] = useState('');

	// State for setting alerts
	const [show, setShow] = useState(false);
	const showAlert = () => setShow(true);
	const hideAlert = () => setShow(false);

	// Form submit handler
	const handleSubmit = (e) => {
		e.preventDefault();

		const result = 'failure'; // call api and do something, get a result
		setStatus(result); // update state
		showAlert(); // show the alert

		e.target.reset();
	};

	return (
		<div className='mt-12'>
			<FormAlert show={show} status={status} hideAlert={hideAlert} />
			<form
				className='flex flex-col justify-center mt-6'
				action=''
				onSubmit={handleSubmit}
			>
				<input
					className='w-full p-2 mt-3 border-2 rounded'
					type='text'
					name='name'
					required
					placeholder='Your name'
				/>
				<input
					className='w-full p-2 mt-3 border-2 rounded'
					type='email'
					name='email'
					required
					placeholder='Your email'
				/>
				<input
					className='w-full p-2 mt-3 border-2 rounded'
					type='text'
					name='subject'
					required
					placeholder='Subject'
				/>
				<textarea
					className='w-full xl:h-56 h-36 p-2 mt-3 border-2 rounded'
					name='message'
					required
					placeholder='Your message'
				/>
				<div className='flex justify-center'>
					<button
						className='mt-6 p-3 bg-blue-500 rounded text-white text-base uppercase'
						type='submit'
					>
						Send me a message
					</button>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
