import React, { useState } from 'react';

import ProjectModal from './ProjectModal';
import usePortal from '../../hooks/usePortal';

const ProjectCard = ({ project }) => {
	// State for displaying the modal
	const [show, showModal] = useState(false);
	// Open modal handler
	const openModal = () => showModal(true);
	// Close modal handler
	const closeModal = () => showModal(false);

	return (
		<div
			className='justify-center mr-5 mt-12 border-2 border-separate sm:shadow-md rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-5'
			style={{ maxWidth: '400px', height: 'auto' }}
		>
			<div className='w-full h-full' onClick={openModal}>
				<div style={{ maxWidth: '400px', height: '200px' }}>
					<img
						className='w-full h-full object-cover'
						src={project.projectImg}
						alt=''
					/>
				</div>
				<div className='mt-6 p-6'>
					<h1 className='text-xl font-bold font-mono'>
						{project.projectTitle}
					</h1>
					<h1 className='mt-3 lg:text-lg'>
						{project.projectShortDescription}
					</h1>
				</div>
			</div>

			{usePortal(
				'project-modal-root',
				<ProjectModal
					show={show}
					closeModal={closeModal}
					project={project}
				/>
			)}
		</div>
	);
};

export default ProjectCard;
