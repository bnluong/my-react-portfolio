import React, { useState } from 'react';

import LinkIcon from '../Home/LinkIcon';
import getColor from '../../utilities/getColor';

const ProjectModal = ({ show, closeModal, project }) => {
	return (
		<div
			className='project-modal-wrapper fixed top-0 bottom-0 left-0 right-0 overflow-y-auto transition-all duration-300 ease-in'
			style={{
				transform: show ? 'translate(0%)' : 'translate(-100%)',
				visibility: show ? 'visible' : 'hidden',
			}}
		>
			<div
				className='project-modal-backdrop fixed top-0 bottom-0 left-0 right-0 z-10 bg-black bg-opacity-80'
				onClick={closeModal}
			></div>

			<div className='project-modal-content relative z-20 xl:mx-72 mt-36 m-3 flex flex-col bg-white p-3 border-2 border-separate sm:shadow-xl rounded-lg '>
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
					<div className='md:mr-12 lg:col-span-2'>
						<img
							className='w-full h-full object-cover'
							src={project.projectImg}
							alt=''
						/>
					</div>
					<div className='flex flex-col flex-1 justify-around'>
						<div className='flex flex-col md:mt-0 mt-6'>
							<h1 className='lg:text-2xl text-xl font-bold'>
								{project.projectTitle}
							</h1>
							<div className='flex flex-row '>
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
						<div className='lg:text-lg mt-6'>
							{project.projectDescription}
						</div>
						<div className='flex flex-wrap text-sm font-mono mt-6'>
							{project.projectSkills.map((skill, index) => (
								<p
									key={index}
									className='badge mt-1 mr-1 uppercase text-white font-mono shadow-lg'
									style={getColor()}
								>
									{skill}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return null;
};

export default ProjectModal;
