import React from 'react'
import { Col, Form, FormControl, InputGroup } from 'react-bootstrap'
import { MdSearch } from "react-icons/md";

function SearchBar({ handleChangeFilter, setWithoutFilter, setGastoFilter, setIngresoFilter }) {
    const style = { padding: 5 };
    return (
        <>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Group as={Col} className="mb-2">
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><MdSearch /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    id="inlineFormInputGroup"
                                    placeholder="Seach"
                                    name="searchFilter"
                                    onChange={handleChangeFilter} />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col}>
                            <div className="mb-4">
                                <Form.Check
                                    style={style}
                                    custom
                                    inline
                                    type="radio"
                                    label="Todos"
                                    name="tipoFiltro"
                                    id="tipoFiltro1"
                                    onClick={setWithoutFilter}
                                    defaultChecked={true}
                                />
                                <Form.Check
                                    style={style}
                                    custom
                                    inline
                                    type="radio"
                                    label="Ingreso"
                                    name="tipoFiltro"
                                    id="tipoFiltro2"
                                    onClick={setIngresoFilter}
                                />
                                <Form.Check
                                    style={style}
                                    custom
                                    inline
                                    type="radio"
                                    label="Gasto"
                                    name="tipoFiltro"
                                    id="tipoFiltro3"
                                    onClick={setGastoFilter}
                                />
                            </div>

                        </Form.Group>
                    </Col>

                </Form.Row>

            </Form>
        </>
    )
}

export default SearchBar
