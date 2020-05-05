import React, {useState} from 'react';
import {Button, Collapse, Carousel} from 'react-bootstrap';
import Typed from 'react-typed';

import ContactModal from './components/contact-modal/contact-modal';
import HomeCarousel from './components/home-carousel/home-carousel';
import JobDetail from './components/job-detail/job-detail';

import './App.scss';

function App() {
	const [modalStatus, setModalStatus] = useState(true);
	
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
			<div className="d-flex flex-column flex-md-row align-items-center fixed-nav">
				<h5 className="my-0 mr-md-auto font-weight-normal">Nunzio Ruffo Portfolio</h5>
				<nav className="my-2 my-md-0 mr-md-3">
					<a className="pt-2 px-4 text-dark" href="#">Projects</a>
					<a className="pt-2 px-5 text-dark" href="#">Blog</a>
				</nav>
			</div>

			<section className="header-section">
				<div className="typed-card">
					<h2>Hello, my name is Nunzio Ruffo </h2>
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
			<section className="projects">
				<div className="bordered-title">
					<div className="row projects-header">
						<div className="col-md-4">
							<h1>See my Jobs</h1>
						</div>
						<div className="col-md-4"></div>
						<div className="col-md-4">
						<form action="#">
							<input id="search-project" placeholder="Python, Restful API, Postgres... " type="text"/>
							<label className="search-icon" htmlFor="search-project"><i className="fas fa-search"></i></label>
						</form>
						</div>
					</div>
				</div>
				

				<JobDetail/>
				<JobDetail/>
				<JobDetail/>

			</section>

		</div>
		<footer>
			<div className="contact-container">
				<div className="contact">
					<h4>Get in touch?</h4>
					<button className="btn btn-primary" onClick={toggleModal}>Contact Me</button>
				</div>
			</div>
			<ul className="social-icons">
				<li>
					<a href="#"><i className="fab fa-instagram"></i></a>
				</li>
				<li>
					<a href="#"><i className="fab fa-github"></i></a>
				</li>
				<li>
					<a href="#"><i className="fab fa-linkedin-in"></i></a>
				</li>
				<li>
					<a href="#"><i className="fas fa-envelope"></i></a>
				</li>
			</ul>

			<p className="made-by">Handcrafted by Me using 
				<a 
				title="React JS" 
				href="https://es.reactjs.org/" 
				target="blank"> <i className="fab fa-react"></i></a>
			</p>
		</footer>

		<ModalHandler />

	</>
  	);
}

export default App;
