import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

const navbarPic = './navbar-pic.jpg';
const resumeLink = './resume.pdf';

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
	},
	{
		url: 'https://github.com/bnluong',
		fgColor: '#ffffff',
		bgColor: '#1f1f1f',
	},
	{
		url: 'mailto:bnluong@uci.edu',
		fgColor: '#ffffff',
		bgColor: '#1f1f1f',
	},
];

const elevatorPitch = `I'm a new graduate with a BS in Computer Science
from UC Irvine. I'm passionate about making high
quality and impactful software with a creative
problem solving mindset. I'm currently on a lookout
for a SWE position to utilize what I have learned
and to further my skills.`;

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
