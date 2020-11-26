import React from 'react'
import { Card} from 'react-bootstrap'
import RegisterForm from './RegisterForm';

function Register(props) {
    const { addMovimiento, handleInputChange, movimiento,handleCancel } = props;
    return (
        <Card>
            <Card.Header>Registro</Card.Header>
            <Card.Body>
                <RegisterForm
                addMovimiento={addMovimiento}
                handleInputChange={handleInputChange}
                movimiento={movimiento}
                handleCancel={handleCancel}
                ></RegisterForm>
            </Card.Body>
        </Card >
    )
}

export default Register
