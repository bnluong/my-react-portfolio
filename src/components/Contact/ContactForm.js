import React from 'react';

function ContactForm() {
	const handleSubmit = (e) => {
		e.preventDefault();
		e.target.reset();
	};
	return (
		<form
			className='flex flex-col justify-center mt-12'
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
	);
}

export default ContactForm;
