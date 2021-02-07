import React, { useState } from 'react';

import emailjs from 'emailjs-com';

import FormAlert from './FormAlert';

function ContactForm() {
	// State for status of emailjs api calls
	const [status, setStatus] = useState(0);

	// State for setting alerts
	const [show, setShow] = useState(false);
	const showAlert = () => setShow(true);
	const hideAlert = () => setShow(false);

	// Form submit handler
	const handleSubmit = (e) => {
		e.preventDefault();
		sendEmail(e); // call api
		e.target.reset();
	};

	// EmailJS handler
	// API respond:
	// 		200 "OK"
	//		400 "The user_id parameter is required"
	const sendEmail = (e) => {
		emailjs
			.sendForm(
				'YOUR_SERVICE_ID',
				'YOUR_TEMPLATE_ID',
				e.target,
				'YOUR_USER_ID'
			)
			.then(
				(result) => {
					setStatus(result.status); // update state
					showAlert(); // show the alert
				},
				(error) => {
					setStatus(error.status); // update state
					showAlert(); // show the alert
				}
			);
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
					name='from_email'
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
