import React from 'react';
import './footer.scss';

const Footer = () => {

    return(
        <>
            <footer>
                {/* <div className="contact-container">
                    <div className="contact">
                        <h4>Get in touch?</h4>
                        <button className="btn btn-primary" onClick={toggleModal}>Contact Me</button>
                    </div>
                </div> */}
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
        </>
    )

}

export default Footer;