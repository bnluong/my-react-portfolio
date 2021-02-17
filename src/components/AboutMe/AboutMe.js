import React from 'react';
import { Link } from 'react-scroll';

import getColor from '../../utilities/getColor';

function AboutMe(props) {
	return (
		<div
			className='flex items-center justify-center min-h-screen lg:pt-0 pt-36'
			id='about-me'
		>
			<div className='lg:mx-36 md:mx-12 mx-6 w-full'>
				<div className='heading'>
					<h1 className='text-2xl font-bold uppercase'>About Me</h1>
				</div>
				<div className='mt-12 lg:text-lg text-justify'>
					{props.about.map((about, index) => (
						<h1 key={index} className='mt-6'>
							{about}
						</h1>
					))}
					<h1 className='mt-6'>
						Check out my{' '}
						<Link
							to='projects'
							smooth={true}
							duration={350}
							className='text-blue-500 underline cursor-pointer'
						>
							#projects
						</Link>{' '}
						section for stuffs I built.
					</h1>
				</div>
				<div className='md:grid grid-cols-3 auto-rows-max mt-16'>
					<div className='mt-3'>
						<h1 className='font-semibold uppercase underline'>
							Education
						</h1>
					</div>
					<div className='col-span-2'>
						{props.education.map((education, index) => (
							<div key={index} className='mt-6'>
								<div className='mt-3'>
									<h1 className='md:text-lg font-bold'>
										{education.university}
									</h1>
									<h1 className='md:text-base text-sm italic font-extralight'>
										{education.date}
									</h1>
									<h1 className='md:text-base text-sm italic font-light'>
										{education.program}
									</h1>
									<h1 className='md:text-base text-sm italic font-light'>
										GPA: {education.gpa}
									</h1>
									<h1 className='mt-3 md:text-base text-sm'>
										Specialization:{' '}
										{education.specialization}
									</h1>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='md:grid grid-cols-3 mt-6'>
					<div className='mt-3'>
						<h1 className='font-semibold uppercase underline'>
							Skills
						</h1>
					</div>
					<div className='col-span-2 mt-3 text-sm  text-white font-mono'>
						{props.skills.map((skill, index) => (
							<div
								key={index}
								className='badge mt-1 mr-1 uppercase font-mono shadow-lg'
								style={getColor()}
							>
								{skill}
							</div>
						))}
					</div>
				</div>
				<h1 className='mt-16 lg:text-lg'>
					Check out my{' '}
					<a
						href={props.resumeLink}
						download
						className='text-blue-500 underline'
					>
						résumé
					</a>{' '}
					for more of my technical credentials.
				</h1>
			</div>
		</div>
	);
}

export default AboutMe;
