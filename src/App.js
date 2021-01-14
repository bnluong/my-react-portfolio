import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

const navbarPic = './navbar-pic.jpg';
const resumeLink = './resume.pdf';

const background = './background1.jpg';
const greeting = 'Hello World!';
const subGreeting = 'My name is Bao Luong';
const title = 'Aspiring Software Engineer';
const profilePic = './profile-pic.jpg';

const socialLinks = [
	{
		url: 'https://linkedin.com/in/bao-luong',
		fgColor: '#ffffff',
		bgColor: '#2f2f2f',
	},
	{
		url: 'https://github.com/bnluong',
		fgColor: '#ffffff',
		bgColor: '#2f2f2f',
	},
	{
		url: 'mailto:bnluong@uci.edu',
		fgColor: '#ffffff',
		bgColor: '#2f2f2f',
	},
];

const elevatorPitch = {};

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
				/>
				<div className='container mx-auto'>
					<AboutMe />
					<Projects />
					<ContactMe />
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
