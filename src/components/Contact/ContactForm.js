import React, { useState, useRef } from 'react';

import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

import FormAlert from './FormAlert';

function ContactForm() {
	// State for status of emailjs api calls
	const [status, setStatus] = useState(0);

	// State for setting alerts
	const [show, setShow] = useState(false);
	const showAlert = () => setShow(true);
	const hideAlert = () => setShow(false);

	// Ref for reCAPTCHA
	const reRef = useRef();

	// Form submit handler
	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = await reRef.current.executeAsync(); // execute the invisible reCAPTCHA
		sendEmail(e); // call emailjs api
		reRef.current.reset(); // reset the reCAPTCHA ref
		e.target.reset(); // reset the form
	};

	// EmailJS handler
	// API response:
	// 		200 "OK"
	//		400 "Error
	const sendEmail = (e) => {
		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				e.target,
				process.env.REACT_APP_EMAILJS_USER_ID
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
				<ReCAPTCHA
					ref={reRef}
					size='invisible'
					sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
				/>
			</form>
		</div>
	);
}

export default ContactForm;
