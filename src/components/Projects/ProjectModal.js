import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

const ProjectModal = (props) => {
	if (props.show) {
		return (
			<div className='project-modal-wrapper fixed top-0 bottom-0 left-0 right-0'>
				<div
					className='project-modal-backdrop fixed top-0 bottom-0 left-0 right-0 z-10 bg-black bg-opacity-80'
					onClick={props.closeModal}
				></div>
				<div className='project-modal-content relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 lg:min-h-3/4 lg:w-1/2 flex flex-col bg-white p-3 border-2 border-separate sm:shadow-xl rounded-lg'>
					<div className='flex justify-end'>
						<button className='w-8 h-8' onClick={props.closeModal}>
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
					<div className='md:grid lg:grid-cols-3 md:grid-cols-2 mt-6'>
						<div className='md:mr-6 lg:col-span-2'>
							<img
								className='object-scale-down'
								src='./homepage.png'
								alt=''
							/>
						</div>
						<div className='flex flex-col flex-1 justify-evenly'>
							<div className='flex flex-col md:mt-0 mt-3'>
								<h1 className='text-xl font-bold'>
									Buy-a-Movie
								</h1>
								<div className='mt-2'>
									<SocialIcon
										url='https://github.com/bnluong/buy-a-movie'
										style={{
											maxWidth: '2rem',
											maxHeight: '2rem',
										}}
									/>
								</div>
							</div>
							<div className='mt-3'>
								Buy-a-Movie is a mock e-commerce website that
								sells movies. The website has standard
								e-commerce features such as searching, browsing,
								add to cart, checkout, login, create account,
								authentication, etc.
							</div>
							<div className='flex flex-wrap text-xs font-mono mt-3'>
								<p className='mr-3'>HTML/CSS/VanillaJS</p>
								<p className='mr-3'>Bootstrap</p>
								<p className='mr-3'>jQuery</p>
								<p className='mr-3'>Java EE</p>
								<p className='mr-3'>SQL</p>
								<p className='mr-3'>Tomcat</p>
								<p className='mr-3'>REST API</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return null;
};

export default ProjectModal;
