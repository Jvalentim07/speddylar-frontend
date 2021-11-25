import * as React from "react"
import { graphql, Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import './imageHover.scss'
import './index.scss'

import { FaInstagram, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from "react-bootstrap/Modal"

//imagens dos serviços
import ResidencialImage from '../images/residencialImage.jpg'
import ComercialImage from '../images/comercialImage.jpg'
import GuardaMoveislImage from '../images/guardamoveisImage.jpg'
import IcamentoImage from '../images/icamentoImage.jpg'
// import PackingImage from '../images/embalagemImage.jpg'
// import MovingImage from '../images/movingImage.jpg'
// Imgens do porque escolher spedylar
import ImageTransparent from '../images/transparent.png'
import ImageBudget from '../images/budgetImage.png'
import ImageContato from '../images/contato.png'
import BackgroundTruck from '../images/backgroundTruck.jpg'
import Logo from '../images/logo.png'
import NavigationBar from "../components/Navbar/Navbar"

import siteData from '../api/services'

class HomePage extends React.Component {
  state = {
      logo: null,
      contact: '',
      itemsMenu: [],
      title: '',
      subTitle: '',
      showModal: false,
      serviceInfo: { 
        type: 'resindecial',
        name: 'Mudança Residencial',
        description: 'A Speedy Lar Mudanças oferece materiais de embalagens, profissionais treinados e segurança para sua mudança residencial.',
        image: ResidencialImage,
        link: '/services/residencial'
      }
  }
  async componentDidMount() {
    console.log(siteData)
      const data = await siteData.getIndexInfo()
      const home = await siteData.getHomeInfo()
      if (this.state.serviceType === 'resindecial') console.log('true')
      await this.setState({ 
          logo: `http://localhost:8080${data[0].Header.Logo.url}`,
          contact: data[0].Header.Contact,
          itemsMenu: data[0].Header.Menu,
          title: home[0].Home[0].Title,
          subTitle: home[0].Home[0].SubTitle,
          teste: home[0].Home[0].Teste
      })
  }
  setSetvice = async (typeName, name, description, imageService, link) => {
    const obj = {
      type: typeName,
      name: name,
      description: description,
      image: imageService,
      link: link
    }
    await this.setState({ serviceInfo: obj })
  }
  // showModal = async () => {
  //   await this.setState({ showModal: true })
  // }
  // closeModal = async () => {
  //   await this.setState({ showModal: false })
  // }
  ModalRender = () => {
    return (
      <>
        <Modal
        show={this.state.showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ borderBottom: '1px solid rgb(255, 129, 32)' }}>
          <Modal.Title style={{ fontWeight: 700, color: 'rgb(255, 129, 32)' }} id="contained-modal-title-vcenter">
            Orçamento
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ borderRadius: '20px' }} action="https://getform.io/f/144743a8-b8c9-426a-8023-aa77e76b97d9" method="POST" name="budget">
              <h2>Formulario de Orçamento</h2>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.closeModal}>Close</Button>
        <Button variant="primary" type="submit">Submit</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
  render () {
  return (
     <div className="content">
       {this.ModalRender()}
       <div style={{ width: "100%"}}>
         <div className="mainContent">
           <div style={{ width: '100%', backgroundColor: '#FF8120' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', color: 'whitesmoke' }}>
               <Link to="https://www.facebook.com/speedylarmudancas/"><FaFacebookSquare style={{ color: 'whitesmoke', height: '24px' }}></FaFacebookSquare></Link>
               <div>comercial@speedylarmudancas.com.br</div>
             </div>
           </div>
           <div className="headerContent">
             <div className="logo"><img width="300px" src={this.state.logo} alt='logoImg' /></div>
             <div style={{ display: 'flex', alignItems: 'center' }}>
               <FaWhatsapp style={{ width: '35px', height: '35px', color: '#FF8120', lineHeight: '48px', marginRight: '15px' }}></FaWhatsapp>
               <div style={{ display: 'flex', flexDirection: 'column'}}>
                 Fale Conosco
                 <Link to="https://api.whatsapp.com/send?phone=551139897408&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Speedy%20Lar%20Mudan%C3%A7as" style={{ color: '#245E70', textDecoration: 'none'}}>{ this.state.contact }</Link>
               </div>
             </div>
           </div>
           <NavigationBar/>
           {/* Conteudo Principal da Pagina */}
           <div className="content-1">
             <div style={{ width: '100%', height: '100%', zIndex: '1'}}>
               <div style={{ position: "absolute", width: "100%", height: "650px", backgroundColor: '#ffffff8f' }}></div>
               <img width="100%" height="650px" src={ BackgroundTruck } alt='ImagemFundo'></img>
             </div>
             <div style={{ zIndex: '2', position: 'absolute'}}>
               <h3 style={{ fontWeight: '60px'}}>{this.state.title}</h3>
               <div style={{ fontSize: '22px', textAlign: 'center' }}>{this.state.teste}</div>
               <Form style={{ backgroundColor: 'transparent' }}>
               <Row className="g-2">
                 <Col md>
                   <Form.Control placeholder="Nome"/>
                 </Col>
                 <Col md>
                   <Form.Control placeholder="Email"/>
                 </Col>
                 <Col md>
                   <Form.Control placeholder="Telefone"/>
                 </Col>
               </Row>
               <div style={{ display: 'flex', justifyContent: 'center'}}>
                 <Button style={{ borderRadius: '20px', width: '200px', backgroundColor: '#ff8120d6', borderColor: '#ff8120d6' }}>Enviar</Button>
               </div>
               </Form>
               <div>
                 <h4 style={{ textAlign: 'center'}}>Redes Sociais</h4>
                 <div className="socialContent">
                   <div>
                     <FaFacebookSquare></FaFacebookSquare>
                   </div>
                   <div>
                     <FaInstagram></FaInstagram>
                   </div>
                   <div>
                     <FaWhatsapp></FaWhatsapp>
                   </div>

                 </div>
               </div>
             </div>
           </div>
           {/* Serviços da Pagina */}
           <div  className="content-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.79)'}}>
             <div style={{ borderRight:' 3px solid #FF8120', marginRight: '30%' }}>
               <div role="table" onClick={() => this.setSetvice('resindecial', 'MUDANÇA RESIDENCIAL', 'A Speedy Lar Mudanças oferece materiais de embalagens, profissionais treinados e segurança para sua mudança residencial.', ResidencialImage, '/services/residencial' ) } className={this.state.serviceInfo.type === 'resindecial' ? "selectedService" : "serviceInfo"}><a>Mudança Residencial</a></div>
               <div role="table" onClick={() => this.setSetvice('comercial', 'MUDANÇA COMERCIAL', 'Oferecemos assistência com segurança e suporte de acordo com a necessidade de cada empresa para sua Mudança Comercial.', ComercialImage, '/services/comercial') } className={this.state.serviceInfo.type === 'comercial' ? "selectedService" : "serviceInfo"}><a>Mudança Comercial</a></div>
               <div role="table" onClick={() => this.setSetvice('guarda', 'GUARDA MÓVEIS', 'Dispomos de guarda-móveis com box de vários tamanhos e amplos espaços para armazenagem para diversos objetos.', GuardaMoveislImage, '/services/guardamoveis') } className={this.state.serviceInfo.type === 'guarda' ? "selectedService" : "serviceInfo"}><a>Guarda Moveis</a></div>
               <div role="table" onClick={() => this.setSetvice('icamento', 'IÇAMENTO', 'A Speedy Lar Mudanças dispõe de profissionais treinados para as operações no Serviço de Içamento de Móveis e Objetos.', IcamentoImage, '/services/service-icamento') } className={this.state.serviceInfo.type === 'icamento' ? "selectedService" : "serviceInfo"}><a>Içamento</a></div>
             </div>
             <div style={{ display: 'flex', marginLeft: '60px' }}>
               <div style={{ backgroundColor: 'gainsboro', width: '300px', height: '215px', marginRight: '100px'}}><img src={ this.state.serviceInfo.image }></img></div>
               <div>
                 <div style={{ fontWeight: '600', color: '#FF8120', fontSize: '24px', textTransform: 'uppercase' }}>{ this.state.serviceInfo.name }</div>
                 <div style={{ color: '#fff', fontSize: '16px', width: '60%', marginBottom: '40px' }}>{ this.state.serviceInfo.description }</div>
                 <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', width: '125px', height: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid 2px #FF8120' }}><Link to={ this.state.serviceInfo.link } style={{ backgroundColor: 'rgba(0,0,0,.8)', color: '#FF8120', textDecoration: 'none' }}>Saiba Mais</Link></div>
               </div>
             </div>
               <div className="serviceContent">
                 <div style={{ display: 'flex', marginRight: '31%'}}>
                 </div>
               </div>
           </div>
           <div className="contentTaks">
             <h2 style={{ color: '#FF8120', textTransform: 'uppercase', fontWeight: '700', marginTop: '0', marginBottom: '20px', fontSize: '36px' }}>PORQUE A SPEEDY LAR?</h2>
             <p>Porque geramos resultados</p>
             <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center'}}>
                 <div className="container">
                     <img alt="Residencial" className="imagePage" src={ ImageTransparent }/>
                     <div className="overlay" style={{ backgroundColor: '#000000c9'}}>
                         <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>SERVIÇOS</h3>
                         <p style={{ color: "#fff"}}>A Sppedy Lar Mudanças oferece serviços de transportes com toda qualidade, segurança e profissionais qualificados.</p>
                         <div className="buttonStyle"><Link to="/services">Saiba Mais</Link></div>
                     </div>
                 </div>
                 <div className="container">
                     <img alt="GuardaMoveis" className="imagePage" src={ ImageBudget }/>
                     <div className="overlay" style={{ backgroundColor: '#000000c9'}}>
                         <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>ORÇAMENTO</h3>
                         <p style={{ color: "#fff"}}>Entre em contato conosco e solicite um Orçamento sem Compromisso de seu Frete, Carreto ou Mudança.</p>
                         <div className="buttonStyle"><Link to="/budget">Solicite</Link></div>
                     </div>
                 </div>
                 <div className="container">
                     <img alt="Icamento" className="imagePage" src={ ImageContato }/>
                     <div className="overlay" style={{ backgroundColor: '#000000c9'}}>
                         <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>CONTATO</h3>
                         <p style={{ color: "#fff"}}>Tem Dúvidas, reclamações ou sugestões? Entre em contato com a equipe da Speedy Lar Mudanças e Transportes.</p>
                         <div className="buttonStyle"><Link to="/contact">Contate</Link></div>
                     </div>
                 </div>
               </div>
             </div>
             <div className="budgetContent">
               <div className="budgetGroup">
                 <h4 style={{ fontSize: '16px', color: 'whitesmoke'}}>PROFISSIONAIS QUALIFICADOS, SEGURANÇA NO TRANSPORTE E ZELO EM SUA MUDANÇA.</h4>
                 <h2 style={{ fontSize: '30px', color: 'whitesmoke'}}>FAÇA UM ORÇAMENTO ONLINE SEM COMPROMISSO</h2>
               </div>
               <div onClick={this.showModal} style={{ display: 'flex', cursor: 'pointer', borderRadius: '12px', alignItems: 'center', justifyContent: 'center', width: '180px', height: '50px', backgroundColor: '#fff', color: '#FF8120', textTransform: 'uppercase' }}>Orçamento</div>
             </div>
           <div style={{ flexDirection: 'column' }} className="contentAvaliation">
             <div style={{ fontSize: '25px', color: '#FF8120', fontWeight: '700', marginBottom: '20px' }}>AVALIAÇÃO</div>
             <div className="cardGroup">
               <div className="cardAvaliation">
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                 <div style={{ backgroundColor: 'whitesmoke', width: '80px', borderRadius: '100%', height: '80px', marginRight: '15px' }}></div>
                 <div style={{ fontSize:  '19px' }}>Onélio Ferrari Neto</div>
                 </div>
                 <div>O pessoal é bastante profissional e qualificado. Só deixo uma orientação para que alguns ajudantes mais jovens sejam um pouco mais pacientes na mudança. Com mais calma, fica mais seguro para o transporte dos materiais. De resto 100%</div>
               </div>
               <div className="cardAvaliation">
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                   <div style={{ backgroundColor: 'whitesmoke', width: '80px', borderRadius: '100%', height: '80px', marginRight: '15px' }}></div>
                   <div style={{ fontSize:  '19px' }}>Hellys Raphael</div>
                 </div>
                 <div>Empresa altamente qualificada, funcionários educados e atenciosos e o melhor de tudo preço justo. Super indico. Parabéns SPEEDY LAR.</div>
               </div>
             </div>
           </div>
           <div className="footer">
             <div className="footerGroup" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%", padding: "20px" }}>
               <div className="footerLogo">
                 <div><img alt="Logo" src={Logo} /></div>
                 <div style={{ maxWidth: "360px"}}>Empresa especializada em Mudanças Residenciais, Mudanças Comerciais, Içamentos, Remoções, Guarda Móveis e Transportes em Geral.</div>
               </div>
               <div className="infoGroup">
                 <div className="footerTitle">Contato</div>
                 <div>
                   Email: comercial@speedylarmudancas.com.br
                 </div>
                 <div>
                   Telefone
                   (11) 3989-7408
                 </div>
               </div>
               <div className="footerTitle">
                 Redes Socias
                 <div><FaInstagram  style={{ marginRight: '10px'}}></FaInstagram>@speedylarmudancas</div>
                 <div><FaFacebookSquare style={{ marginRight: '10px'}}></FaFacebookSquare>Speedy Lar Mudanças</div>
               </div>
            </div>
           </div>
         </div>
      </div>
     </div>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
