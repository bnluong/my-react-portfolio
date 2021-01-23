import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { SocialIcon } from 'react-social-icons';

import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

function Projects() {
	return (
		<div
			className='flex items-center justify-center min-h-screen md:pt-0 py-28'
			id='projects'
		>
			<div className='lg:mx-36 md:mx-12 mx-6 w-full'>
				<div className='heading'>
					<h1 className='text-xl font-bold uppercase'>Projects</h1>
				</div>
				<div className='md:grid lg:grid-cols-3 md:grid-cols-2 flex justify-center flex-wrap'>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</div>
	);
}

export default Projects;
