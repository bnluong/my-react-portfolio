import React, { useState } from 'react';

import LinkIcon from '../Home/LinkIcon';

const ProjectModal = ({ show, closeModal, project }) => {
	if (show) {
		return (
			<div className='project-modal-wrapper fixed top-0 bottom-0 left-0 right-0 sm:m-0 m-3'>
				<div
					className='project-modal-backdrop fixed top-0 bottom-0 left-0 right-0 z-10 bg-black bg-opacity-80'
					onClick={closeModal}
				></div>

				<div className='project-modal-content relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 lg:min-h-3/4 lg:w-1/2 flex flex-col bg-white p-3 border-2 border-separate sm:shadow-xl rounded-lg'>
					<div className='flex justify-end'>
						<button className='w-8 h-8' onClick={closeModal}>
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
								className='object-cover'
								src={project.projectImg}
								alt=''
							/>
						</div>
						<div className='flex flex-col flex-1 justify-evenly'>
							<div className='flex flex-col md:mt-0 mt-3'>
								<h1 className='text-xl font-bold'>
									{project.projectTitle}
								</h1>
								<div className='flex flex-row mt-2'>
									{project.projectLinks.map((link, index) => (
										<LinkIcon
											key={index}
											url={link.url}
											fgColor={link.fgColor}
											bgColor={link.bgColor}
											maxWidth={link.maxWidth}
											maxHeight={link.maxHeight}
										/>
									))}
								</div>
							</div>
							<div className='mt-3'>
								{project.projectDescription}
							</div>
							<div className='flex flex-wrap text-xs font-mono mt-3'>
								{project.projectSkills.map((skill, index) => (
									<p key={index} className='mr-3'>
										{skill}
									</p>
								))}
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
