import React from 'react'
import { Card, Col, Form, FormControl, InputGroup, Navbar } from 'react-bootstrap'

function Header(props) {
    const { handleInputChange, initialBudget, finalBudget } = props;
    return (
        <Card>
            <Card.Body>
                <Navbar>
                    <Col>
                        <Navbar.Brand>Poli JIC - Taller React</Navbar.Brand>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Valor Inicial</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            name="initialValue"
                                            type="text"
                                            placeholder="Valor Inicial"
                                            className="mr-sm-2"
                                            value={initialBudget}
                                            onChange={handleInputChange}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Valor Final</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            id="finalValue"
                                            name="finalValue"
                                            value={finalBudget}
                                            className="mr-sm-2" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>

                        </Form>
                    </Col>
                </Navbar>
            </Card.Body>
        </Card>

    )
}

export default Header
