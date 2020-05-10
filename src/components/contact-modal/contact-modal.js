import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

import './contact-modal.scss';

const ContactModal = (props) => {
    const [show, setShow] = useState(props.modalStatus);
  
    const handleClose = () => {
      setShow(false)
      props.toggleModal(false);
      return false;
    };
    const handleShow = () => {
      setShow(true);
      props.toggleModal(true);
    }
  
    return (
		<>
			<Modal show={show} onHide={handleClose}>

				<Modal.Header closeButton>
					<Modal.Title>Get in Touch</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>If you wanna get in touch, talk to me about a work offer, or just say hi. Please fill up this form.</p>

					<Form>
						<Form.Group controlId="subject">
							<Form.Control type="text" placeholder="Your Name" />
						</Form.Group>
						<Form.Group controlId="email">
							<Form.Control type="email" placeholder="Your email" />
						</Form.Group>
						<Form.Group controlId="message">
							<Form.Control 
								as="textarea" 
								rows="4" 
								placeholder="What do you want to talk about?" 
							/>
						</Form.Group>
					</Form>
				</Modal.Body>

				<div className="submit-container">
					<Button variant="primary">
						Submit
					</Button>
				</div>

			</Modal>
		</>
    );
}

export default ContactModal;