import React from 'react';

function AboutMe() {
	return (
		<div
			className='flex items-center justify-center min-h-screen'
			id='about-me'
		>
			<div className='grid mx-3'>
				<div className='heading py-3'>
					<h1 className='text-2xl font-bold'>About Me</h1>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Accusamus ipsum ipsam possimus ea. Repellat distinctio culpa
					odit voluptas at asperiores perferendis dolor eaque fuga
					tempore? Qui ex voluptate veniam commodi.
				</p>
				<div>
					<h1 className='text uppercase font-semibold py-3'>
						Education
					</h1>
					<h1 className='font-semibold'>
						University of California, Irvine
					</h1>
					<h1 className='text-xs pb-2'>2017 - 2019</h1>
					<h1>Bachelor of Science in Computer Science</h1>
					<h1 className='text-xs'>GPA: 3.57/4.00</h1>
				</div>
				<div>
					<h1 className='text uppercase font-semibold py-3'>
						Skills
					</h1>
					<div className='flex'>
						<h1>Java</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
