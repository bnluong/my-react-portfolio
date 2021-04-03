// Projects data
export const projects = [
	{
		projectTitle: 'Buy-a-Movie',
		projectImg: './projects/buy_a_movie.png',
		projectShortDescription:
			'Buy-a-Movie is a mock e-commerce website that sells movies.',
		projectDescription: [
			'Buy-a-Movie is a mock e-commerce website that sells movies. The website has standard e-commerce features such as searching, browsing, add to cart, checkout, login, create account, authentication, etc.',
			'The website utilizes microservices architecture with the use of REST APIs to achieve front-end/back-end separation.',
			'The website is designed with the responsive approach. It will display and fit various screens from desktop to small smart phones.',
			'This is my first attempt to build a full-stack web app. It does not use modern tech stack but it served as a strong foundation for me to continue learning and developing modern web app using modern stack.',
		],
		projectLinks: [
			{
				url: 'https://github.com/bnluong/buy-a-movie',
				maxWidth: '2rem',
				maxHeight: '2rem',
			},
			{
				url: 'https://www.youtube.com/watch?v=idoEeiNtcgw',
				maxWidth: '2rem',
				maxHeight: '2rem',
			},
		],
		projectSkills: [
			'HTML5',
			'CSS3',
			'JavaScript',
			'Bootstrap',
			'jQuery',
			'JSON',
			'Java EE',
			'My SQL',
			'Microservices',
			'REST API',
			'Tomcat',
			'Maven',
		],
	},
	{
		projectTitle: 'React Portfolio',
		projectImg: './projects/portfolio.png',
		projectShortDescription: 'My portfolio site made with ReactJS',
		projectDescription: [
			'My own personal website made from scratch with ReactJS and Tailwind CSS. You are looking at it!',
		],
		projectLinks: [
			{
				url: 'https://github.com/bnluong/my-react-portfolio',
				maxWidth: '2rem',
				maxHeight: '2rem',
			},
			{
				url: 'https://bnluong.github.io/my-react-portfolio/',
				maxWidth: '2rem',
				maxHeight: '2rem',
			},
		],
		projectSkills: ['HTML', 'CSS', 'JS/ES6', 'React JS', 'Tailwind CSS'],
	},
	{
		projectTitle: 'Nightmare Survivor',
		projectImg: './projects/nightmare.png',
		projectShortDescription: 'Nightmare Survivor - An FPS made with Unity',
		projectDescription: [
			`Nightmare Survivor is a prototyped 3D, first-person computer game in which players' nightmares manifest and become reality. The game featured standard key binding, 1st person camera control, collision detection, ray tracing, and basic AI components.`,
		],
		projectLinks: [
			{
				url: 'https://github.com/Arma15/BestGame',
				maxWidth: '2rem',
				maxHeight: '2rem',
			},
			{
				url: 'https://lmonzon72.wixsite.com/viperz',
				maxWidth: '2rem',
				maxHeight: '2rem',
			},
			{
				url: 'https://www.youtube.com/watch?v=3TRTN4HoHZ8',
				maxWidth: '2rem',
				maxHeight: '2rem',
			},
			{
				url:
					'https://drive.google.com/file/d/1WFzLb_wnoIv3hf-_S6MKOlZWWEme_5_F/view?usp=sharing',
				maxWidth: '2rem',
				maxHeight: '2rem',
			},
		],
		projectSkills: ['C#', 'Unity', 'Sprint', 'Teamwork'],
	},
	{
		projectTitle: 'LIDAR Filters',
		projectImg: './projects/lidar.png',
		projectShortDescription:
			'Two LIDAR filters to reduce noise in data collected by a LIDAR sensor',
		projectDescription: [
			`LIDAR filters is used to reduce noise in data collected by LIDAR sensors.`,
			`- Range filter: Crops all values that below a defined minimum/maximun range and replaces them with the minimum/maximun range values.`,
			`- Temporal median filter: For each iteration fo the scans (i.e range from 0 to N-1 scan), filter out the data with the medium of the current i scan and the previous D scans.`,
		],
		projectLinks: [
			{
				url: 'https://github.com/bnluong/LIDAR-filter',
				maxWidth: '2rem',
				maxHeight: '2rem',
			},
		],
		projectSkills: ['C++', 'GNU g++', 'CMake', 'VSCode'],
	},
	{
		projectTitle: 'Simple Search Engine',
		projectImg: './projects/simple_search_engine.png',
		projectShortDescription:
			'A simple search engine which features web crawling, indexing, and retrieving over a static corpus',
		projectDescription: [
			'A simple search engine that performs web search over the UCI ICS domain.',
			'The ICS domain is downloaded as a static corpus (set of documents the seach engine can perform on).',
			'Features both a front-end and a back-end.',
			'Utilized OOP design and implementation.',
			'Optimized retrieving and indexing time by performing pre-checks at startup.',
		],
		projectLinks: [],
		projectSkills: [
			'Python 3',
			'RegEX',
			'NLTK',
			'Web Scraping',
			'TF-IDF Indexing',
		],
	},
];
