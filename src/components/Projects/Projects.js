import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { SocialIcon } from 'react-social-icons';

function Projects() {
	return (
		<div
			className='flex items-center justify-center min-h-screen md:pt-16 pt-28'
			id='projects'
		>
			<div className='mx-3 md:mx-12 lg:mx-36'>
				<div className='heading lg:py-12 mb-3'>
					<h1 className='text-2xl font-bold'>Projects</h1>
				</div>

				<Tabs selectedTabClassName='border-b-2 border-transparent border-blue-300'>
					<TabList className='flex flex-row justify-center mb-3'>
						<Tab className='mr-3 p-2 block hover:bg-blue-200 rounded'>
							Personal Projects
						</Tab>
						<Tab className='mr-3 p-2 block hover:bg-blue-200 rounded'>
							Academic Projects
						</Tab>
					</TabList>
					<div className='mt-6 '>
						<TabPanel>
							<h1 className='text-sm font-semibold text-center'>
								This is my web development portfolio.
							</h1>
							<div className='p-3 mt-3 border-2 border-separate sm:shadow-xl rounded '>
								<div className='md:grid lg:grid-cols-3 md:grid-cols-2'>
									<div className='md:mr-6 lg:col-span-2'>
										<img src='./homepage.png' alt='' />
									</div>
									<div className='flex flex-col flex-1 justify-evenly'>
										<div className='flex flex-col md:mt-0 mt-3'>
											<h1 className='text-xl font-bold'>
												Buy-a-Movie
											</h1>
											<div className='mt-2'>
												<SocialIcon
													url='https://github.com/bnluong/buy-a-movie'
													style={{
														maxWidth: '2rem',
														maxHeight: '2rem',
													}}
												/>
											</div>
										</div>
										<div className='mt-3'>
											Buy-a-Movie is a mock e-commerce
											website that sells movies. The
											website has standard e-commerce
											features such as searching,
											browsing, add to cart, checkout,
											login, create account, and many
											more.
										</div>
										<div className='flex flex-wrap text-xs font-mono mt-3'>
											<p className='mr-3'>
												HTML/CSS/VanillaJS
											</p>
											<p className='mr-3'>BootstrapS</p>
											<p className='mr-3'>jQuery</p>
											<p className='mr-3'>Java EE</p>
											<p className='mr-3'>SQL</p>
											<p className='mr-3'>Tomcat</p>
											<p className='mr-3'>REST API</p>
										</div>
									</div>
								</div>
							</div>
							<div className='p-3 mt-12 border-2 border-separate sm:shadow-xl rounded '>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Soluta, illo quas. Placeat
								excepturi qui pariatur deserunt nam odit officia
								quas recusandae culpa fuga quod, veritatis
								veniam sapiente iure laudantium dolorum!
							</div>
						</TabPanel>
						<TabPanel>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Quia saepe deserunt ipsam,
								nihil atque ad, labore repellendus voluptate a
								exercitationem facere veritatis ab eos aliquam
								nisi inventore ullam non enim.
							</p>
						</TabPanel>
					</div>
				</Tabs>
			</div>
		</div>
	);
}

export default Projects;
