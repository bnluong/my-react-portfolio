import React from 'react';

function AboutMe() {
	return (
		<div
			className='flex items-center justify-center min-h-screen'
			id='about-me'
		>
			<div className='mx-3 md:mx-12 lg:mx-36'>
				<div className='heading lg:py-12 py-3'>
					<h1 className='text-2xl font-bold'>About Me</h1>
				</div>
				<div className='md:grid md:grid-cols-2 md:text-lg'>
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
							scratch. Come check out my{' '}
							<a
								href='#projects'
								className='text-blue-500 underline'
							>
								#project
							</a>{' '}
							section!
						</h1>
					</div>
					<div className='md:ml-6'>
						<h1 className='md:mt-0 mt-3'>
							I stared programming with C++. And, over the years,
							I picked up many different languages and got fairly
							proficient at them. Below are the some highlights of
							my technical skills.
						</h1>

						<div className='flex flex-wrap my-3'>
							<div className='badge bg-gray-500 text-white font-mono m-1'>
								C/C++
							</div>
							<div className='badge bg-gray-500 text-white font-mono m-1'>
								Java
							</div>
							<div className='badge bg-gray-500 text-white font-mono m-1'>
								Python
							</div>
							<div className='badge bg-gray-500 text-white font-mono m-1'>
								HTML5
							</div>
							<div className='badge bg-gray-500 text-white font-mono m-1'>
								CSS
							</div>
							<div className='badge bg-gray-500 text-white font-mono m-1'>
								ES6
							</div>
							<div className='badge bg-gray-500 text-white font-mono m-1'>
								Node JS
							</div>
							<div className='badge bg-gray-500 text-white font-mono m-1'>
								React
							</div>
							<div className='badge bg-gray-500 text-white font-mono m-1'>
								SQL
							</div>
							<div className='badge bg-gray-500 text-white font-mono m-1'>
								REST API
							</div>
							<div className='badge bg-gray-500 text-white font-mono m-1'>
								VS Code
							</div>
							<div className='badge bg-gray-500 text-white font-mono m-1'>
								Linux/Unix
							</div>
						</div>
						<h1 className='md:mt-0 mt-3'>
							Wanna know more? Check out my{' '}
							<a
								href='./resume.pdf'
								download
								className='text-blue-500 underline'
							>
								résumé
							</a>
							!
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
