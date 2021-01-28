import React from 'react';

import ProjectCard from './ProjectCard';

function Projects({ projects }) {
	return (
		<div
			className='flex items-center justify-center min-h-screen lg:pt-0 pt-36'
			id='projects'
		>
			<div className='lg:mx-36 md:mx-12 mx-6 w-full'>
				<div className='heading'>
					<h1 className='text-2xl font-bold uppercase'>Projects</h1>
				</div>
				<div className='md:grid xl:grid-cols-3 lg:grid-cols-2 flex justify-center flex-wrap'>
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;
