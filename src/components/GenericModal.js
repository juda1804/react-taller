import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
import Message from './Message';
import RegisterForm from './RegisterForm'

function GenericModal({ show, movement, message, editMovement, handleClose, title }) {
    const [movimiento,setMovimiento] = useState(movement);


    const handleMovimientoInputChange = (e) => {
        setMovimiento({ ...movimiento, [e.target.name]: e.target.value })
    }

    const handlerEditMovimiento = (e) => {
        e.preventDefault();
        editMovement(movimiento);
        handleClose();
    }

    return (
        <>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {movement != null ?
                        <RegisterForm
                            movimiento={movimiento}
                            addMovimiento={handlerEditMovimiento}
                            handleInputChange={handleMovimientoInputChange}
                            handleCancel={handleClose}
                            edit={true}
                        ></RegisterForm> : <Message message={message}></Message>
                    }
                </Modal.Body>
                <Modal.Footer hidden={movement != null}>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default GenericModal
