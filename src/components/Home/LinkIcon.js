import React from 'react';
import { SocialIcon } from 'react-social-icons';

const LinkIcon = (props) => {
	return (
		<div>
			<SocialIcon
				url={props.url}
				fgColor={props.fgColor}
				bgColor={props.bgColor}
				style={{
					maxWidth: '3rem',
					maxHeight: '3rem',
					margin: '0rem .5rem',
				}}
			/>
		</div>
	);
};

export default LinkIcon;
