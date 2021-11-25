import * as React from "react"
import LayoutPage from "../../components/layoutPage"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BackgroundIcamento from '../../images/backgroundIcamento.jpg'
import ResidencialImage from '../../images/residencialImage.jpg'
import ComercialImage from '../../images/comercialImage.jpg'
import GuardaMoveislImage from '../../images/guardamoveisImage.jpg'
import PackingImage from '../../images/embalagemImage.jpg'
import MovingImage from '../../images/movingImage.jpg'
import { Link } from "gatsby"

import services from '../../api/services'

class Icamento extends React.Component {
    state = {
        servicesInfo: [],
        title: ''
    }
    async componentDidMount() {
        const data = await services.getServices()
        await this.setState({ 
            servicesInfo: data[0],
            title: data[0].Seo[3].MetaTitle
        })
    }
    render () {
        return (
            <LayoutPage
            title={this.state.title}
            img={ BackgroundIcamento }
            pagination={ 'Home > Serviços > Içamento' }
            >
                <div style={{ display: 'flex', alignItems: "center", flexDirection: "column" }}>
                    <div>
                        <div>
                            <h2 style={{marginBottom: "36px", textAlign: "center" }}>SERVIÇO DE IÇAMENTO</h2>
                            <div style={{ maxWidth: "710px", marginBottom: "15px", textAlign: "center" }}>Utilizamos máquinas e equipamentos modernos e atualizados; guindaste para içar com segurança e rapidez. Profissionais altamente treinados para as operações de içamento de móveis e objetos de maneira adequadas.</div>
                        </div>
                    </div>
                    <div className="contentForm">
                        <Form style={{ maxWidth: "550px",  borderRadius: '25px'}} method="POST">
                            <h2>FALE CONOSCO</h2>
                            <Row className="g-2">
                                <Col md>
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control id="name" type="text" placeholder="Insira seu nome" />
                                </Col>
                                <Col md>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control id="email" type="email" placeholder="Insira seu email" />
                                </Col>
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control id="phone" type="text" placeholder="Insira seu Telefone" />
                                <Form.Control
                                    id="description"
                                    as="textarea"
                                    name="Descricao"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </Row>
                            <div className="buttonStyle" style={{ backgroundColor: '#212529', color: 'whitesmoke', marginTop: '15px' }} role = "button" tabIndex={0}>
                                Submit
                            </div>
                        </Form>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: 'center'}}>
                    <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center'}}>
                        <div className="container">
                            <img alt="Residencial" className="imagePage" src={ ResidencialImage }/>
                            <div class="overlay">
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>MUDANÇA</h3>
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>RESIDENCIAL</h3>
                                <p style={{ color: "#fff"}}>A Speedy Lar Mudanças oferece materiais de embalagens, profissionais treinados e segurança para sua mudança</p>
                                <div className="buttonStyle"><Link to="/services/residencial">Saiba Mais</Link></div>
                            </div>
                        </div>
                        <div className="container">
                            <img alt="Comercial" className="imagePage" src={ ComercialImage }/>
                            <div class="overlay">
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>MUDANÇA COMERCIAL</h3>
                                <p style={{ color: "#fff"}}>Oferecemos assistência com segurança e suporte de acordo com a necessidade de cada empresa para sua Mudança</p>
                                <div className="buttonStyle"><Link to="/services/comercial">Solicite</Link></div>
                            </div>
                        </div>
                        <div className="container">
                            <img alt="Guarda" className="imagePage" src={ GuardaMoveislImage }/>
                            <div class="overlay">
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>GUARDA MÓVEL</h3>
                                <p style={{ color: "#fff"}}>Dispomos de guarda-móveis com box de vários tamanhos e amplos espaços para armazenagem para diversos objetos</p>
                                <div className="buttonStyle"><Link to="/services/guardamoveis">Entre em contato</Link></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                        <div className="container">
                            <img alt="Embalagem" className="imagePage" src={ PackingImage }/>
                            <div class="overlay">
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>EMBALAGEM</h3>
                                <p style={{ color: "#fff"}}>Nossas embalagens vão de acordo com as necessidades de nossos clientes, garantindo proteção e segurança</p>
                                <div className="buttonStyle"><Link to="/services/icamento">Solicite</Link></div>
                            </div>
                        </div>
                        <div className="container">
                            <img alt="Mudanca" className="imagePage" src={ MovingImage }/>
                            <div class="overlay">
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>MONTAGEM E DESMONTAGEM</h3>
                                <p style={{ color: "#fff"}}>Serviço Montagem e Desmontagem de Móveis para Mudanças ou Guarda-Móvel com equipe treinada</p>
                                <div className="buttonStyle"><Link to="/services/icamento">Entre em contato</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutPage>
        )
    }
}

export default Icamento