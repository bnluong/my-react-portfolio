import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

const profilePic = './pic.jpg';

function App() {
	return (
		<div className='App flex flex-col'>
			<NavBar profilePic={profilePic} />
			<div className='container mx-auto'>
				<AboutMe />
				<Projects />
				<ContactMe />
			</div>
			<Footer />
		</div>
	);
}

export default App;
