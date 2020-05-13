import React, {useState, useEffect, Fragment} from 'react';
import {Button, Collapse, Carousel} from 'react-bootstrap';
import Typed from 'react-typed';
import ReactHtmlParser from 'react-html-parser'; 


import ContactModal from './components/contact-modal/contact-modal';
import Footer from './components/footer/footer';
import HomeCarousel from './components/home-carousel/home-carousel';
import Navbar from './components/navbar/navbar';
import ProjectDetail from './components/project-detail/project-detail';
import ProjectSearch from './components/project-search/project-search';

import './App.scss';

function App() {
	const [modalStatus, setModalStatus] = useState(false);
	const [projectsData, setProjectsData] = useState({contents:null,  isLoading:true});

	async function fetchData() {
		const response = await fetch("https://portfolio.nunzioproject.xyz/api/post/?slug=portfolio");
		response
			.json()
			.then(response => {
				setProjectsData({
					contents:response[0].contents, 
					isLoading:false}
				)
			})
			.catch(err => console.log(err));
	}

	useEffect(() => {
		fetchData();
	}, []);


	const MainSectionHandler = () => {
		if (projectsData.isLoading){
			return '';
		} else {
			let mainContent = projectsData.contents.find(element => element.key == "main-content");
			return (
				<section className="header-section">
					<div className="typed-card">
						{ ReactHtmlParser (mainContent.value) }
						<Typed
							className="strings"
							strings={stringsValues}
							typeSpeed={40}
							backSpeed={50}
							loop
						/>
					</div>

					<HomeCarousel />

				</section>
			);
		}
	}

	const ProjectDetailHandler = () => {
		if (projectsData.isLoading){
			return '';
		} else {
			
			let projectsDetails = []			
			projectsData.contents.map(function (obj) {
				if (obj.key == "job-detail"){
					projectsDetails.push(obj)
				}
			})
			
			return (
				projectsDetails.map(data => <ProjectDetail key={data.key} data={data} />)
			)
		}
	}
	
	const toggleModal = (toggle) => {
		setModalStatus(toggle);
	}

	const ModalHandler = () => {
		return <ContactModal modalStatus={modalStatus} toggleModal={toggleModal} />	
	}

	let stringsValues = [
		"I'm Fullstack Developer", 
		"I'm Python Developer", 
		"I'm Javascript Developer", 
		"I'm self-taught Programmer",
		"I'm person who never stops learning"
	]

  	return (
    <>	
		<div className="container">			
			<Navbar/>
			<MainSectionHandler />

			<section className="projects">
				<ProjectSearch/>
				<ProjectDetailHandler />
			</section>

		</div>

		<Footer/>		

		<ModalHandler />

	</>
  	);
}

export default App;
