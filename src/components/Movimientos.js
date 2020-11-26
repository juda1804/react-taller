import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import MovimientoItem from './MovimientoItem';
import SearchBar from './SearchBar';

function Movimientos({ movimientos, removeMovimiento, editMovimiento }) {
    const [list, setList] = useState(["INGRESO", "GASTO"]);
    const [searchFilter, setSearchFilter] = useState("");

    const setWithoutFilter = () => {
        setList(["INGRESO", "GASTO"]);
    }

    const setIngresoFilter = () => {
        setList(["INGRESO"]);
    }

    const setGastoFilter = () => {
        setList(["GASTO"]);
    }

    const handleChangeFilter = (e) => {
        setSearchFilter(e.target.value)
    }

    return (
        <Card>
            <Card.Header>Registro</Card.Header>
            <Card.Body>
                <SearchBar
                    handleChangeFilter={handleChangeFilter}
                    setWithoutFilter={setWithoutFilter}
                    setGastoFilter={setGastoFilter}
                    setIngresoFilter={setIngresoFilter}>
                </SearchBar>
                {
                    movimientos
                        .filter(v => list.includes(v.tipoMovimiento))
                        .filter(v => {
                            if (searchFilter.trim()) {
                                return v.nombre.toLowerCase().includes(searchFilter.toLowerCase());
                            } else {
                                return true;
                            }
                        })
                        .map(
                            (movimiento, index) =>
                                <MovimientoItem
                                    key={index}
                                    movimiento={movimiento}
                                    removeMovimiento={removeMovimiento}
                                    editMovimiento={editMovimiento}
                                    >
                                </MovimientoItem>
                        )}
            </Card.Body>
        </Card >
    )
}

export default Movimientos
