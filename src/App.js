import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<AboutMe />
			<Projects />
			<ContactMe />
			<Footer />
		</div>
	);
}

export default App;
