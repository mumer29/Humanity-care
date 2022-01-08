



import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

function Modal5() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <h1 className="mb-5 text-decoration-underline serviceHover"
                onClick={handleShow}
                style={{ position: "absolute", cursor: "pointer" }}>Ration
            </h1>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Humanity Care Monthly Ration</Modal.Title>
                </Modal.Header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmAnEEnBsOWxIZdgJUyFg7q_0wxkI20slhQ&usqp=CAU" alt='' />
                <Modal.Body>In these hard times and rising costs, poor families suffer the most. Due to poverty they lack the funds to meet their day-to-day necessities of life i.e. food, clothing and education. In order to lessen their sufferings, Humanity Care Monthly Ration took upon the humanitarian task to become the Custodian for such indigent families.

                    Humanity Care Welfare gives the utmost priority to ensure their provisions of food, clothing and education and provide these deserving families with Humanity Care Monthly Ration. Also, mandatorily maintaining the respect for their self-esteem––which is never compromised under any circumstances or cost.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modal5


