// Home page data
export const backgrounds = [
	process.env.PUBLIC_URL + '/home/background_A.jpg',
	process.env.PUBLIC_URL + '/home/background_B.jpg',
	process.env.PUBLIC_URL + '/home/background_C.jpg',
];
export const background =
	backgrounds[Math.floor(Math.random() * backgrounds.length)];
export const greeting = 'Hello World!';
export const subGreeting = 'My name is Bao Luong';
export const title = 'Aspiring Software Engineer';
export const profilePic = './home/profile_pic.jpg';
export const socialLinks = [
	{
		url: 'https://linkedin.com/in/bao-luong',
		fgColor: '#ffffff',
		bgColor: '#1f1f1f',
		maxWidth: '3rem',
		maxHeight: '3rem',
	},
	{
		url: 'https://github.com/bnluong',
		fgColor: '#ffffff',
		bgColor: '#1f1f1f',
		maxWidth: '3rem',
		maxHeight: '3rem',
	},
	{
		url: 'mailto:bnluong@uci.edu',
		fgColor: '#ffffff',
		bgColor: '#1f1f1f',
		maxWidth: '3rem',
		maxHeight: '3rem',
	},
];
export const elevatorPitch = `I'm a new graduate with a BS in Computer Science
from UC Irvine. I'm passionate about making high
quality and impactful software with a creative
problem solving mindset. I'm currently on a lookout
for a SWE position to utilize what I have learned
and to further my skills.`;
