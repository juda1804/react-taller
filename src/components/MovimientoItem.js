import React, {useState} from 'react'
import { Badge, Button, Col, Container, ListGroup, Row } from 'react-bootstrap'
import NumberFormat from 'react-number-format';
import GenericModal from './GenericModal';


function MovimientoItem(props) {
    const [show, setShow] = useState(false);
    const { movimiento, removeMovimiento, editMovimiento } = props;

    const defineColorField = (tipoMovimiento) => {
        if (tipoMovimiento === "INGRESO") {
            return "success";
        } else {
            return "danger";
        }
    }

    const handleRemove = () => {
        removeMovimiento(movimiento.id);
    }

    const handleEdit = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <ListGroup.Item >
            <Container>
                <Row>
                    <Col>
                        <Button variant="default" type="button" onClick={handleRemove}>
                            <img style={{ height: 20, marginTop: 10 }} src="./assets/remove.svg"></img>
                        </Button>
                        <Button variant="default" type="button" onClick={handleEdit}>
                            <img style={{ height: 20, marginTop: 10 }} src="./assets/edit.svg"></img>
                        </Button>
                    </Col>
                    <Col>
                        <Badge>{movimiento.nombre} </Badge>
                    </Col>
                    <Col>
                        <Badge variant={defineColorField(movimiento.tipoMovimiento)}>
                            <NumberFormat value={movimiento.cantidad} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        </Badge>
                    </Col>
                </Row>
            </Container>
            <GenericModal
                title="Editar Movimiento"
                show={show}
                movement={movimiento}
                editMovement={editMovimiento}
                handleClose={handleClose}
            ></GenericModal>
        </ListGroup.Item>
    )
}

export default MovimientoItem
