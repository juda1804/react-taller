import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from './components/Header'
import Movimientos from './components/Movimientos';
import Register from './components/Register';
import uuid from 'react-uuid'
import GenericModal from './components/GenericModal';

function App() {
    const [showModal, setShowModal] = useState(false);

    const [initialValue, setInitialValue] = useState(0);
    const [finalValue, setFinalValue] = useState(0);

    const [movimientos, setMovimientos] = useState([]);

    const [movimiento, setMovimiento] = useState({
        id: uuid(),
        nombre: "",
        tipoMovimiento: "INGRESO",
        cantidad: 0
    })

    const handlerSubmit = (e) => {
        e.preventDefault();

        if (checkMovimiento()) {
            setMovimientos([...movimientos, movimiento]);
            clearMovimiento();
        } else {
            setShowModal(true);
        }

    }

    const checkMovimiento = () => {
        if (!movimiento.nombre.trim()) {
            return false;
        }

        if(movimiento.tipoMovimiento.includes("GASTO")) {
            const total = finalValue - movimiento.cantidad;
            return total >= 0 ? true : false    
        }

        return true;
    }

    const removeItem = id => {
        setMovimientos(movimientos.filter(m => m.id !== id));
    }

    const clearMovimiento = () => {
        setMovimiento({ ...movimiento, id: uuid(), nombre: "", cantidad: "" });
    }

    const editMovimiento = (movimiento) => {
        setMovimientos(movimientos.map(m => {
            if (m.id === movimiento.id) {
                if (checkMovimiento()) {
                    return { ...m, nombre: movimiento.nombre, cantidad: movimiento.cantidad, tipoMovimiento: movimiento.tipoMovimiento };
                } else {
                    setShowModal(true)
                    return m
                }
                
            } else {
                return m;
            }
        }));
    }

    const handleMovimientoInputChange = (e) => {
        setMovimiento({ ...movimiento, [e.target.name]: e.target.value })
    }

    const handleInitialValueInputChange = (e) => {
        setInitialValue(e.target.value);
    }

    const getValueByTipoMovimiento = (tipoMovimiento) => {
        console.log(movimientos);
        let value = movimientos
            .filter(m => m.tipoMovimiento.includes(tipoMovimiento))
            .map(m => m.cantidad)
            .reduce((a, b) => a + b, 0);

        console.log("value is: " + value + " for " + tipoMovimiento);

        return value;
    }

    const defineFinalValue = () => {
        let ingresos = getValueByTipoMovimiento("INGRESO");

        let gasto = getValueByTipoMovimiento("GASTO");

        console.log("Ingresos:" + ingresos + " Egresos: " + gasto);

        setFinalValue(+initialValue + +ingresos - +gasto);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    useEffect(() => {
        defineFinalValue();
    }, [initialValue])

    useEffect(() => {
        defineFinalValue();
    }, [movimientos])

    return (
        <Container>
            <Header
                handleInputChange={handleInitialValueInputChange}
                initialBudget={initialValue}
                finalBudget={finalValue}
                movimientos={movimientos}
                setFinalValue={setInitialValue}>
            </Header>
            <Row>
                <Col>
                    <Register
                        movimiento={movimiento}
                        handleInputChange={handleMovimientoInputChange}
                        addMovimiento={handlerSubmit}
                        handleCancel={clearMovimiento}>
                    </Register>
                </Col>
                <Col>
                    <Movimientos
                        movimientos={movimientos}
                        removeMovimiento={removeItem}
                        editMovimiento={editMovimiento}>
                    </Movimientos>
                </Col>
                <GenericModal
                    title="Error"
                    show={showModal}
                    handleClose={handleClose}
                    message="Saldo Insuficiente para realizar el movimiento">
                </GenericModal>
            </Row>
        </Container>

    )
}

export default App
