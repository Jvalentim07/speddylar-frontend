import * as React from "react"
import LayoutPage from "../components/layoutPage"

import Form from 'react-bootstrap/Form'
import ContactBackground from '../images/budget.jpg'
import ContactImage from '../images/contato.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import api from '../api/api'

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            contact: {
                name: '',
                email: '',
                phone: '',
                descricao: ''
            }
        };
        this.onInputchange = this.onInputchange.bind(this);
        // this.onSubmitForm = this.onSubmitForm.bind(this);
      }
      onInputchange(event) {
          const contact = this.state.contact
          const value = event.target.value
          const dataName = event.target.id
          if (dataName === 'name') contact.name = value
          if (dataName === 'email') contact.email = value
          if (dataName === 'phone') contact.phone = value
          if (dataName === 'description') contact.descricao = value
        this.setState({ contact: contact});
      }
      sendMail = () => {
        api.get('/contact', { params: { 
            name: this.state.contact.name,
            email: this.state.contact.email,
            phone: this.state.contact.phone,
            descricao: this.state.contact.descricao,
        }})
        .then( res =>{
            this.setState({ contact: {} });
        })
        this.setState({ contact: '' });
    }
    render (){
        return (
            <LayoutPage 
            title="CONTATO" 
            subtitle="PROFISSIONAIS QUALIFICADOS, SEGURANÇA NO TRANSPORTE E ZELO EM SUA MUDANÇA."
            img={ ContactBackground }
            pagination={ 'Home > Contato' }
            textTitle="Sobre nossa empresa"
            text="A Speedy Lar Mudança e Transporte Ltda atua na área de transporte de mudanças e guarda móveis sempre adequando às tendências do mercado, oferecendo a você segurança, conforto e qualidade, exigindo dos profissionais, responsabilidade cuidado e compromisso em suas operações. Mais que isso transportamos bens conquistado e para isso promovemos organização e proteção dos mesmo"
            contentImage={ ContactImage }
            >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px'}}>
                    <div className="contactPage">
                        <Form style={{ maxWidth: "550px"}} method="POST">
                            <h2>FALE CONOSCO</h2>
                            <Row className="g-2">
                                <Col md>
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control id="name" value={this.state.name} onChange={this.onInputchange} type="text" placeholder="Insira seu nome" />
                                </Col>
                                <Col md>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control id="email" onChange={this.onInputchange} value={this.state.email} type="email" placeholder="Insira seu email" />
                                </Col>
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control id="phone" onChange={this.onInputchange}  value={this.state.phone} type="text" placeholder="Insira seu Telefone" />
                                <Form.Control
                                    id="description"
                                    as="textarea"
                                    name="Descricao"
                                    onChange={this.onInputchange}
                                    value={this.state.descricao}
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </Row>
                            <div className="buttonStyle" style={{ backgroundColor: '#212529', color: 'whitesmoke', marginTop: '15px' }} role = "button" tabIndex={0} onClick={this.sendMail} onKeyDown={this.teste}>
                                Submit
                            </div>
                        </Form>
                        <div style={{ height: '350px', borderLeft: 'solid 1px', padding: '40px' }}>
                            <div>
                                <h4>Endereço</h4>
                                <div>Rua Gérson Pereira de Brito, 167 Vila PenteadoSão Paulo - SP - CEP: 02844-180</div>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <div>comercial@speedylarmudancas.com.br</div>
                            </div>
                            <div>
                                <h4>Telefone</h4>
                                <div>(11) 3989-7408</div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutPage>
        )
    }
}

export default Contact