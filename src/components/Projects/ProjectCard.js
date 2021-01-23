import React, { useState } from 'react';

import ProjectModal from './ProjectModal';
import usePortal from './usePortal';

const ProjectCard = () => {
	// State for displaying the modal
	const [show, showModal] = useState(false);
	// Open modal handler
	const openModal = () => showModal(true);
	// Close modal handler
	const closeModal = () => showModal(false);
	return (
		<div
			className='justify-center mr-5 mt-12 border-2 border-separate sm:shadow-md rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-5'
			style={{ maxWidth: '512px', height: 'auto' }}
		>
			<div className='fixed w-full h-full' onClick={openModal}></div>
			<div>
				<img
					className='object-scale-down'
					src='./homepage.png'
					alt=''
				/>
			</div>
			<div className='mt-6 p-6'>
				<h1 className='text-lg font-bold font-mono'>Buy-a-Movie</h1>
				<h1 className='mt-3'>
					Buy-a-Movie is a mock e-commerce website that sells movies.
				</h1>
			</div>
			{usePortal(
				'project-modal-root',
				<ProjectModal show={show} closeModal={closeModal} />
			)}
		</div>
	);
};

export default ProjectCard;
