



import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

function Modal3() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <h1 className="mb-5 text-decoration-underline serviceHover"
                onClick={handleShow}
                style={{  position: "absolute", cursor: "pointer" }}>Water 
            </h1>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Water For Life</Modal.Title>
                </Modal.Header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6lxI-iNAQhkwr9W2YorYqgzFZf3kRlOC-OA&usqp=CAU" alt="water"/>
                <Modal.Body>During the drought years, women and children suffer more. The Thari population is no longer able to survive the period of drought, despite working day and night; more than 90 percent of them find themselves in a cycle of bad debt to moneylenders from whom they have borrowed money at usurious rates. In addition there are some cultural and religious issues which makes the problem worse for some Tharis; the members of lower castes or ‘Shoodren’ are not allowed to fetch water or even come near the resource ‘owned’ by the higher castes known as ‘Brahman’. This has pushed the lower castes further beyond the poverty line. Water is the essence of health and of life itself; it also plays an important role in human recreation and relaxation. Safe and accessible water is now clearly recognized as a fundamental human right. The current plight of the Thari people is an affront to human dignity and their situation can be improved dramatically, easily and cost effectively.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modal3


