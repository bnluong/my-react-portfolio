import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

// NavBar data
const navbarPic = './navbar-pic.jpg';
const resumeLink = './resume.pdf';

// Home page data
const backgrounds = ['./background.jpg', './background1.jpg'];
const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
const greeting = 'Hello World!';
const subGreeting = 'My name is Bao Luong';
const title = 'Aspiring Software Engineer';
const profilePic = './profile-pic.jpg';
const socialLinks = [
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
const elevatorPitch = `I'm a new graduate with a BS in Computer Science
from UC Irvine. I'm passionate about making high
quality and impactful software with a creative
problem solving mindset. I'm currently on a lookout
for a SWE position to utilize what I have learned
and to further my skills.`;

// AboutMe Data
const about = [
	`Hi there! I'm a recent computer science graduate from UC
Irvine. During my academic career, I specialized in OS
and system design. Through my coursework and projects, I
have developed skills to analyze, design, implement,
test, and maintain software with Object Oriented
Programming principle in mind.`,
	`With recent events involving COVID-19, I have to
postpone my post-grad job search in order to help taking
care of my family. During this time, I picked up
full-stack web development. I really enjoyed learning
and building full-stack web app from scratch.`,
];
const education = [
	{
		university: 'University of California, Irvine',
		date: 'Sep 2017 - Dec 2019',
		program: 'Bachelor of Science in Computer Science',
		gpa: '3.57',
		specialization: 'System and Software',
	},
	{
		university: 'Mt. San Antonio College',
		date: 'Sep 2015 - Spring 2017',
		program: 'Associate in Science in Mathematics for Transfer ',
		gpa: '3.89',
		specialization: 'Computer Science Transfer',
	},
];
const skills = [
	'C/C++',
	'Java',
	'Python',
	'HTML5',
	'CSS3',
	'Javascript ES6',
	'Node JS',
	'React JS',
	'SQL',
	'REST API',
	'AJAX',
	'GIT',
	'VS Code',
	'Linux/Unix',
];

// Projects data
const projects = [
	{
		projectTitle: 'Buy-a-Movie',
		projectImg: './homepage.png',
		projectShortDescription:
			'Buy-a-Movie is a mock e-commerce website that sells movies.',
		projectDescription:
			'Buy-a-Movie is a mock e-commerce website that sells movies. The website has standard e-commerce features such as searching, browsing, add to cart, checkout, login, create account, authentication, etc.',
		projectLinks: [
			{
				url: 'https://github.com/bnluong/buy-a-movie',
				maxWidth: '2rem',
				maxHeight: '2rem',
			},
		],
		projectSkills: [
			'HTML/CSS/VanillaJS',
			'Bootstrap',
			'jQuery',
			'Java EE',
			'SQL',
			'Tomcat',
			'REST API',
		],
	},
	{
		projectTitle: 'React Portfolio',
		projectImg: './homepage1.png',
		projectShortDescription: 'My portfolio site made with ReactJS',
		projectDescription:
			'My own personal website made from scratch with ReactJS and Tailwind CSS. You are looking at it!',
		projectLinks: [
			{
				url: 'https://github.com/bnluong/my-react-portfolio',
				maxWidth: '2rem',
				maxHeight: '2rem',
			},
			{
				url: 'http://localhost:3000/',
				maxWidth: '2rem',
				maxHeight: '2rem',
			},
		],
		projectSkills: ['HTML', 'CSS', 'JS/ES6', 'React JS', 'Tailwind CSS'],
	},
	{
		projectTitle: 'React Portfolio',
		projectImg: './homepage1.png',
		projectShortDescription: 'My portfolio site made with ReactJS',
		projectDescription:
			'My own personal website made from scratch with ReactJS and Tailwind CSS. You are looking at it!',
		projectLinks: [
			{
				url: 'https://github.com/bnluong/my-react-portfolio',
				maxWidth: '2.5rem',
				maxHeight: '2.5rem',
			},
			{
				url: 'http://localhost:3000/',
				maxWidth: '2.5rem',
				maxHeight: '2.5rem',
			},
		],
		projectSkills: ['HTML', 'CSS', 'JS/ES6', 'React JS', 'Tailwind CSS'],
	},
	{
		projectTitle: 'React Portfolio',
		projectImg: './homepage1.png',
		projectShortDescription: 'My portfolio site made with ReactJS',
		projectDescription:
			'My own personal website made from scratch with ReactJS and Tailwind CSS. You are looking at it!',
		projectLinks: [
			{
				url: 'https://github.com/bnluong/my-react-portfolio',
				maxWidth: '2.5rem',
				maxHeight: '2.5rem',
			},
			{
				url: 'http://localhost:3000/',
				maxWidth: '2.5rem',
				maxHeight: '2.5rem',
			},
		],
		projectSkills: ['HTML', 'CSS', 'JS/ES6', 'React JS', 'Tailwind CSS'],
	},
];

function App() {
	return (
		<div className='App flex flex-col h-full '>
			<BrowserRouter>
				<NavBar navbarPic={navbarPic} resumeLink={resumeLink} />
				<Home
					background={background}
					greeting={greeting}
					subGreeting={subGreeting}
					title={title}
					profilePic={profilePic}
					socialLinks={socialLinks}
					elevatorPitch={elevatorPitch}
				/>
				<div className='container mx-auto'>
					<AboutMe
						about={about}
						education={education}
						skills={skills}
						resumeLink={resumeLink}
					/>
					<Projects projects={projects} />
					<ContactMe />
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
