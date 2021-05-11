import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
	return (
		<div className='footer flex-col items-center justify-center lg:pt-28 pt-14 pb-8'>
			<div className='flex justify-center'>
				<SocialIcon
					url='https://linkedin.com/in/bao-luong'
					fgColor='#ffffff'
					bgColor='#1f1f1f'
					style={{
						maxWidth: '2rem',
						maxHeight: '2rem',
						marginTop: '0.5rem',
						marginBottom: '0.5rem',
						marginRight: '0.5rem',
					}}
				/>
				<SocialIcon
					url='https://github.com/bnluong'
					fgColor='#ffffff'
					bgColor='#1f1f1f'
					style={{
						maxWidth: '2rem',
						maxHeight: '2rem',
						margin: '0.5rem 0.5rem',
					}}
				/>
				<SocialIcon
					url='mailto:bnluong@uci.edu'
					fgColor='#ffffff'
					bgColor='#1f1f1f'
					style={{
						maxWidth: '2rem',
						maxHeight: '2rem',
						margin: '0.5rem 0.5rem',
					}}
				/>
			</div>
			<div className='flex justify-center'>
				<h1 className='sm:text-base text-sm font-mono'>
					Bao Luong © {new Date().getFullYear()}.
				</h1>
			</div>
		</div>
	);
}

export default Footer;
