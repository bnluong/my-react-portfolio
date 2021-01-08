import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

const navbarPic = './navbar-pic.jpg';
const resumeLink = './resume.pdf';
const profilePic = './profile-pic.jpg';

function App() {
	return (
		<div className='App flex flex-col h-full '>
			<BrowserRouter>
				<NavBar navbarPic={navbarPic} resumeLink={resumeLink} />

				<div className='container mx-auto '>
					<Home profilePic={profilePic} />
					<AboutMe />
					<Projects />
					{/*<ContactMe /> */}
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
