import * as React from "react"
import LayoutPage from "../components/layoutPage"
import Service from "../components/Service/Service.jsx"
import Background from '../images/background.jpg'
import ResidencialImage from '../images/residencialImage.jpg'
import ComercialImage from '../images/comercialImage.jpg'
import GuardaMoveislImage from '../images/guardamoveisImage.jpg'
import IcamentoImage from '../images/icamentoImage.jpg'
import PackingImage from '../images/embalagemImage.jpg'
import MovingImage from '../images/movingImage.jpg'
import { Link } from "gatsby"
import './imageHover.scss'

const Services = () => {
 return (
    <LayoutPage
        title="SERVIÇOS" 
        img={ Background }
        pagination={ 'Home > Serviços' }
    >
        {/* <div>
            <div>
                <div className="overlayPage" style={{ display: 'flex', justifyContent: 'center'}}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <h3 style={{ fontSize: '60px', fontWeight: '700', color: 'white' }}>SERVIÇOS</h3>
                        <p style={{ color: 'white'}}>HOME/SERVIÇOS</p>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <div style={{ display: 'flex', alignItems: "center", flexDirection: "column", padding: '20px' }}>
            <h2 style={{marginBottom: "36px", marginBottom: '20px'}}>SERVIÇOS DE MUDANÇAS E TRANSPORTES</h2>
            <div style={{ maxWidth: "710px", marginBottom: "15px", textAlign: "center" }}>A Speedy Lar Mudança e Transporte Ltda tem como meta principal a satisfação de seus clientes proporcionando total garantia da qualidade de seus serviços, oferecendo sofisticados e modernos materiais para embalagens, profissionais qualificados, segurança durante transporte, zelo, responsabilidade e cuidados especiais para com seu patrimônio, resultando em total comodidade já a partir de nossa contratação.</div>
            <Service></Service>
        </div> */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: 'center'}}>
            <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center'}}>
                <div className="container">
                    <img alt="Residencial" className="imagePage" src={ ResidencialImage }/>
                    {/* <div class="overlay">
                        <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>MUDANÇA</h3>
                        <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>RESIDENCIAL</h3>
                        <p style={{ color: "#fff"}}>A Speedy Lar Mudanças oferece materiais de embalagens, profissionais treinados e segurança para sua mudança</p>
                        <div className="buttonStyle"><Link to="/services/residencial">Saiba Mais</Link></div>
                    </div> */}
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
                    <img alt="Guarda moveis" className="imagePage" src={ GuardaMoveislImage }/>
                    <div class="overlay">
                        <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>GUARDA MÓVEL</h3>
                        <p style={{ color: "#fff"}}>Dispomos de guarda-móveis com box de vários tamanhos e amplos espaços para armazenagem para diversos objetos</p>
                        <div className="buttonStyle"><Link to="/services/guardamoveis">Entre em contato</Link></div>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                <div className="container">
                    <img alt="Icamento" className="imagePage" src={ IcamentoImage }/>
                    <div class="overlay">
                        <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>IÇAMENTO</h3>
                        <p style={{ color: "#fff"}}>A Speedy Lar Mudanças dispõe de profissionais treinados para as operações no Serviço de Içamento de Móveis e Objetos</p>
                        <div className="buttonStyle"><Link to="/services/icamento">Saiba mais</Link></div>
                    </div>
                </div>
                <div className="container">
                    <img alt="Embalagem" className="imagePage" src={ PackingImage }/>
                    <div class="overlay">
                        <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>EMBALAGEM</h3>
                        <p style={{ color: "#fff"}}>Nossas embalagens vão de acordo com as necessidades de nossos clientes, garantindo proteção e segurança</p>
                        <div className="buttonStyle"><Link to="/services/icamento">Solicite</Link></div>
                    </div>
                </div>
                <div className="container">
                    <img alt="Montagem" className="imagePage" src={ MovingImage }/>
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

export default Services