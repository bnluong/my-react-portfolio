import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

const profilePic = './pic.jpg';

function App() {
	return (
		<div className='App'>
			<NavBar profilePic={profilePic} />
			<div className='container flex mt-24'>
				<AboutMe />
			</div>

			{/* <Projects />
			<ContactMe />
			<Footer /> */}
		</div>
	);
}

export default App;
