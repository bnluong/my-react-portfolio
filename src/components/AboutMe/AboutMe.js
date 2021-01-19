import React from 'react';
import { HashLink } from 'react-router-hash-link';

function AboutMe() {
	var randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return (
		<div
			className='flex items-center justify-center min-h-screen md:pt-0 py-28'
			id='about-me'
		>
			<div className='lg:mx-36 md:mx-12 mx-6 w-full'>
				<div className='heading'>
					<h1 className='text-xl font-bold uppercase'>About Me</h1>
				</div>
				<div className='mt-12 text-justify'>
					<h1>
						Hi there! I'm a recent computer science graduate from UC
						Irvine. During my academic career, I specialized in OS
						and system design. Through my coursework and projects, I
						have developed skills to analyze, design, implement,
						test, and maintain software with Object Oriented
						Programming principle in mind.
					</h1>
					<h1 className='mt-3'>
						With recent events involving COVID-19, I have to
						postpone my post-grad job search in order to help taking
						care of my family. During this time, I picked up
						full-stack web development. I really enjoyed learning
						and building full-stack web app from scratch.
					</h1>
					<h1 className='mt-3'>
						Check out my{' '}
						<HashLink
							to='#projects'
							smooth
							className='text-blue-500 underline'
						>
							#projects
						</HashLink>{' '}
						section for stuffs I built.
					</h1>
				</div>
				<div className='md:grid grid-cols-4 mt-16'>
					<div className='mt-3'>
						<h1 className='font-semibold uppercase underline'>
							Education
						</h1>
					</div>
					<div className='col-span-3 mt-3'>
						<h1 className='md:text-lg font-bold'>
							University of California, Irvine
						</h1>
						<h1 className='md:text-base text-sm italic font-extralight'>
							Sep 2017 - Dec 2019
						</h1>
						<h1 className='md:text-base text-sm italic font-light'>
							Bachelor of Science in Computer Science
						</h1>
						<h1 className='md:text-base text-sm italic font-light'>
							GPA: 3.57
						</h1>
						<div className='mt-3'>
							<h1 className='md:text-base text-sm'>
								Specialization: System and Software
							</h1>
						</div>
					</div>
				</div>
				<div className='md:grid grid-cols-4 mt-6'>
					<div className='mt-3'>
						<h1 className='font-semibold uppercase underline'>
							Skills
						</h1>
					</div>
					<div className='col-span-3 mt-3 md:text-sm text-xs text-white font-mono'>
						<div
							className='badge mt-1 mr-1'
							style={{ backgroundColor: '#' + randomColor }}
						>
							C/C++
						</div>
						<div className='badge bg-blue-500 mt-1 mr-1'>Java</div>
						<div className='badge bg-blue-500 mt-1 mr-1'>
							Python
						</div>
						<div className='badge bg-blue-500 mt-1 mr-1'>HTML5</div>
						<div className='badge bg-blue-500 mt-1 mr-1'>CSS3</div>
						<div className='badge bg-blue-500 mt-1 mr-1'>ES6</div>
						<div className='badge bg-blue-500 mt-1 mr-1'>
							Node JS
						</div>
						<div className='badge bg-blue-500 mt-1 mr-1'>React</div>
						<div className='badge bg-blue-500 mt-1 mr-1'>SQL</div>
						<div className='badge bg-blue-500 mt-1 mr-1'>
							REST API
						</div>
						<div className='badge bg-blue-500 mt-1 mr-1'>AJAX</div>
						<div className='badge bg-blue-500 mt-1 mr-1'>Git</div>
						<div className='badge bg-blue-500 mt-1 mr-1'>
							VS Code
						</div>
						<div className='badge bg-blue-500 mt-1 mr-1'>
							Linux/Unix
						</div>
					</div>
				</div>
				<h1 className='mt-16'>
					Check out my{' '}
					<a
						href='./resume.pdf'
						download
						className='text-blue-500 underline'
					>
						résumé
					</a>{' '}
					for more of my technical credentials.
				</h1>
			</div>
			{/* <div className='mx-3 md:mx-12 lg:mx-36 '>
				<div className='heading lg:py-12 py-3'>
					<h1 className='text-2xl font-bold'>About Me</h1>
				</div>
				<div className='md:grid md:grid-cols-2 md:text-lg text-justify'>
					<div className='md:mr-6'>
						<h1>
							Hi there! I'm a recent computer science graduate
							from UC Irvine. During my academic career, I
							specialized in OS and system design. Through my
							coursework and projects, I have developed skills to
							analyze, design, implement, test, and maintain
							software with Object Oriented Programming principle
							in mind.
						</h1>
						<h1 className='mt-3'>
							With recent events involving COVID-19, I have to
							postpone my post-grad job search in order to help
							taking care of my family. During this time, I picked
							up full-stack web development. I really enjoyed
							learning and building full-stack web app from
							scratch. Check out my{' '}
							<HashLink
								to='#projects'
								smooth
								className='text-blue-500 underline'
							>
								#projects
							</HashLink>{' '}
							section!
						</h1>
					</div>
					<div className='md:ml-6 text-justify'>
						<h1 className='md:mt-0 mt-3'>
							I stared programming with C++. And, over the years,
							I picked up many different languages and got fairly
							proficient at them. Below are the some highlights of
							my technical skills.
						</h1>

						<div className='flex flex-wrap my-3'>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								C/C++
							</div>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								Java
							</div>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								Python
							</div>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								HTML5
							</div>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								CSS
							</div>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								ES6
							</div>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								Node JS
							</div>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								React
							</div>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								SQL
							</div>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								REST API
							</div>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								AJAX
							</div>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								Git
							</div>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								VS Code
							</div>
							<div className='badge bg-blue-500 text-white font-mono m-1'>
								Linux/Unix
							</div>
						</div>

					</div>
				</div>
			</div> */}
		</div>
	);
}

export default AboutMe;
