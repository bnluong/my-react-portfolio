import React from 'react';

export default function FormAlertSuccess({ hideAlert }) {
	return (
		<div
			className='flex flex-row justify-between p-2 rounded bg-blue-500 cursor-pointer'
			onClick={hideAlert}
		>
			<h1 className=' mr-6 font-mono text-white sm:text-base text-sm text-justify '>
				Thank you for sending me a message. I will get back to you as
				soon as possible.
			</h1>
			<div className='flex justify-end'>
				<button className='w-5 h-5 text-white' onClick={hideAlert}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
