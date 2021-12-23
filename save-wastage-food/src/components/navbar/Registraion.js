import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'

function RegistrationForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <i className="fas fa-user" onClick={handleShow}></i>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-check form-check-inline">
                            <h4>  You are ?</h4>
                        </div>


                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                defaultValue="option1"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">
                                Seeker
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                defaultValue="option2"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio2">
                                Donor
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio3"
                                defaultValue="option3"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio3">
                                Admin
                            </label>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" />
                            </div>
                        </div>
                        {/* <fieldset className="row mb-3">
                            <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gridRadios"
                                        id="gridRadios1"
                                        defaultValue="option1"
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                        First radio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gridRadios"
                                        id="gridRadios2"
                                        defaultValue="option2"
                                    />
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                        Second radio
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gridRadios"
                                        id="gridRadios3"
                                        defaultValue="option3"
                                        disabled
                                    />
                                    <label className="form-check-label" htmlFor="gridRadios3">
                                        Third disabled radio
                                    </label>
                                </div>
                            </div>
                        </fieldset> */}
                        {/* <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Example checkbox
                                    </label>
                                </div>
                            </div>
                        </div> */}
                        <button type="submit" className="btn btn-primary">
                            Sign in
                        </button>
                    </form>




                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Sign in</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}
export default RegistrationForm



