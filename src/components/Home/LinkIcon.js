import React from 'react';
import { SocialIcon } from 'react-social-icons';

function LinkIcon(props) {
	return (
		<div>
			<SocialIcon
				url={props.url}
				fgColor={props.fgColor}
				bgColor={props.bgColor}
				style={{
					marginTop: '.5rem',
					marginRight: '.5rem',
					maxWidth: `${props.maxWidth}`,
					maxHeight: `${props.maxHeight}`,
				}}
			/>
		</div>
	);
}

export default LinkIcon;
