import React from 'react';

function AboutMe() {
	return (
		<div class='about-me md:pl-4 lg:pl-10 md:pr-4 flex self-start flex-col mt-20'>
			<div class='w-full rounded overflow-hidden shadow-lg bg-white flex flex-col p-6 md:py-8 lg:py-12 xl:py-16 md:px-8 lg:px-12 xl:px-20'>
				<p>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
