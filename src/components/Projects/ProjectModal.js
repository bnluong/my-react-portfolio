import React from 'react';

import LinkIcon from '../Home/LinkIcon';
import getColor from '../../utilities/getColor';

const ProjectModal = ({ show, closeModal, project }) => {
	return (
		<div
			className='fixed top-0 bottom-0 left-0 right-0 transition-all duration-300 ease-in'
			style={{
				transform: show ? 'translate(0%)' : 'translate(-100%)',
				visibility: show ? 'visible' : 'hidden',
			}}
		>
			<div
				className='fixed top-0 left-0 w-full h-full z-10 bg-black bg-opacity-80'
				onClick={closeModal}
			></div>

			<div className='fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-6 max-w-full max-h-full w-5/6 md:h-auto sm:h-3/5 h-3/4'>
				<div className='top-0 left-0 max-w-full max-h-full overflow-y-auto flex flex-col bg-white p-3 border-2 border-separate sm:shadow-xl rounded-lg'>
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
								className='w-full h-full object-scale-down'
								src={project.projectImg}
								alt=''
							/>
						</div>
						<div className='flex flex-col flex-1 justify-around'>
							<div className='flex flex-col md:mt-0 mt-6'>
								<h1 className='lg:text-2xl text-xl font-bold'>
									{project.projectTitle}
								</h1>
								<div className='flex flex-row'>
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
							<ul className='lg:text-lg mt-6'>
								{project.projectDescription.map(
									(description, index) => (
										<li
											key={index}
											className='mt-3'
											style={{
												listStyleType: 'circle',
											}}
										>
											{description}
										</li>
									)
								)}
							</ul>
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
		</div>
	);
};

export default ProjectModal;
