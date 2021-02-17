import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import {
	backgrounds,
	background,
	greeting,
	subGreeting,
	title,
	profilePic,
	socialLinks,
	elevatorPitch,
} from './data/homeData';
import { navbarPic, resumeLink } from './data/navbarData';
import { about, education, skills } from './data/aboutData';
import { projects } from './data/projectsData';

function App() {
	return (
		<div className='App flex flex-col h-full '>
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
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default App;
