import * as React from "react"
import LayoutPage from "../components/layoutPage"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import BudgetImage from '../images/budget.jpg'
// import { sendMail } from '../mail/mail'
// import { sendMail } from 'sendmail'

const Budget = () => {
    return (
        <LayoutPage 
            title="Orçamento"
            img={ BudgetImage }
            pagination={ 'Home > Orçamento' }
        >
            <div style={{ display: "flex", justifyContent: 'center', marginBottom: '50px' }}>
                <Form style={{ width: "75%" }} action="https://getform.io/f/144743a8-b8c9-426a-8023-aa77e76b97d9" method="POST" name="budget">
                    <h2>PREENCHA O FORMULÁRIO</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" name="Nome" placeholder="Insira seu nome" />
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control type="text" name="Endereço" placeholder="Insira seu email" />
                        <Row className="g-2">
                            <Col md>
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control type="text" placeholder="Insira seu telefone" />
                            </Col>
                            <Col md>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Insira seu email" />
                            </Col>
                        </Row>
                        <Row className="g-2">
                            <Col md>
                                <Form.Label>Tipo de mudança</Form.Label>
                                <Form.Select>
                                    <option>Large select</option>
                                </Form.Select>
                            </Col>
                            <Col md>
                                <Form.Label>Precisa de montagem e Desmontagem?</Form.Label>
                                <Form.Select>
                                    <option>Large select</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className="g-2">
                            <Col md>
                                <Form.Label>Origem</Form.Label>
                                <Form.Control type="text" placeholder="Endereço de origem" />
                            </Col>
                            <Col md>
                                <Form.Label>Cidade de origem</Form.Label>
                                <Form.Control type="text" placeholder="Cidade de origem" />
                            </Col>
                            <Col md>
                                <Form.Label>Estado de origem</Form.Label>
                                <Form.Control type="text" placeholder="Estado de origem" />
                            </Col>
                        </Row>
                        <Row className="g-2">
                            <Col md>
                                <Form.Label>Destino</Form.Label>
                                <Form.Control type="text" placeholder="Endereço de destino" />
                            </Col>
                            <Col md>
                                <Form.Label>Cidade de destino</Form.Label>
                                <Form.Control type="text" placeholder="Cidade de destino" />
                            </Col>
                            <Col md>
                                <Form.Label>Estado de destino</Form.Label>
                                <Form.Control type="text" placeholder="Estado de destino" />
                            </Col>
                        </Row>
                        <Form.Control type="text" placeholder="Assunto" />
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </LayoutPage>
    )
}

export default Budget