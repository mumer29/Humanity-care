import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

function Modal1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <h1 className="mb-5 text-decoration-underline serviceHover"
                onClick={handleShow}
                style={{  position: "absolute", cursor: "pointer" }}>DastarKhan</h1>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Our DastarKhan </Modal.Title>
                </Modal.Header>
                <img src="https://saylani-welfare-uk.netlify.app/Food.jpg"  alt="dastkajh" />
                <Modal.Body>Determined to alleviate the burden of hunger for the poor,
                     we have set up a Humanity Care Dastarkhan at various Saylani branches
                      across Pakistan where the needy are fed twice a day, every day.
                       Although this is a very small contribution, it is our small way of 
                       removing the fear of uncertainty for the poor who often do not know 
                       whether they will have a meal to eat next or not. With our service, 
                       they know that there is always a place where they can eat 365 days a year, 
                       and no one needs to sleep hungry at night.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
        
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modal1
