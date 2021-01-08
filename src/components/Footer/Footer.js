import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
	return (
		<div className='footer flex justify-center mt-24 p-2'>
			<div className='grid grid-rows-2'>
				<div className='flex flex-row justify-center'>
					<SocialIcon
						url='https://linkedin.com/in/bao-luong'
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
						style={{
							maxWidth: '2rem',
							maxHeight: '2rem',
							margin: '0.5rem 0.5rem',
						}}
					/>
					<SocialIcon
						url='mailto:bnluong@uci.edu'
						bgColor='#52afd3'
						fgColor='#ffffff'
						style={{
							maxWidth: '2rem',
							maxHeight: '2rem',
							margin: '0.5rem 0.5rem',
						}}
					/>
				</div>
				<div className='mt-3 sm:text-base text-sm font-mono'>
					Bao Luong © {new Date().getFullYear()}.
				</div>
			</div>
		</div>
	);
}

export default Footer;
