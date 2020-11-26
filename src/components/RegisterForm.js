import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function RegisterForm({ addMovimiento, handleInputChange, movimiento, handleCancel, edit = false }) {
    return (
        <div>
            <Form onSubmit={addMovimiento}>
                <Form.Group >
                    <Form.Label>Tipo Movimiento</Form.Label>
                    <Form.Control
                        as="select"
                        name="tipoMovimiento"
                        onChange={handleInputChange}
                        value={movimiento.tipoMovimiento}
                    >
                        <option value="INGRESO">Ingreso</option>
                        <option value="GASTO">Gasto</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                        name="nombre"
                        type="text"
                        onChange={handleInputChange}
                        value={movimiento.nombre} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control
                        name="cantidad"
                        type="number"
                        onChange={handleInputChange}
                        value={movimiento.cantidad}
                        required
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Button variant="secondary" onClick={handleCancel}>
                            Cerrar
                    </Button>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            {edit ? "Editar" : "Agregar movimiento"}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default RegisterForm
