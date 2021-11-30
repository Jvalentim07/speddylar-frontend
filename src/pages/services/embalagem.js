import * as React from "react"
import LayoutPage from "../../components/layoutPage"
import ResidencialImage from '../../images/residencialImage.jpg'
import ComercialImage from '../../images/comercialImage.jpg'
import GuardaMoveislImage from '../../images/guardamoveisImage.jpg'
import IcamentoImage from '../../images/icamentoImage.jpg'
import MovingImage from '../../images/movingImage.jpg'
import BackgroundPacking from '../../images/backgroundPacking.jpg'
import PackingImage from '../../images/embalagemImage.jpg'
import { Link } from "gatsby"

import services from '../../api/services'

class Packaging extends React.Component {
    state = {
        servicesInfo: [],
        title: ''
    }
    async componentDidMount() {
        const data = await services.getServices()
        await this.setState({ 
            servicesInfo: data[0],
            title: data[0].Seo[4].MetaTitle
        })
    }
    render () {
        return (
            <LayoutPage
            title={this.state.title}
            img={ BackgroundPacking }
            pagination={ 'Home > Serviços > Embalagem' }
            textTitle="Variedade de tipo de embalagem"
            text="Nossas embalagens vão de acordo com as necessidades de nossos clientes, garantindo proteção e segurança para transportar. Papelão Ondulado, Plástico Bolha, Papel Resma, Papel Kraft, Cabideiros, Cobertores, Caixas Colméia."
            contentImage={ PackingImage }
            >
                <div style={{ display: 'flex', alignItems: "center", flexDirection: "column" }}>
                    <div>
                        <h2 style={{marginBottom: "36px", textAlign: "center" }}>SERVIÇOS DE MUDANÇAS E TRANSPORTES</h2>
                        <div style={{ maxWidth: "710px", marginBottom: "15px", textAlign: "center" }}>
                            Nossas embalagens vão de acordo com as necessidades de nossos clientes, garantindo proteção e segurança para transportar.
                            Papelão Ondulado
                            Plástico Bolha
                            Papel Resma
                            Papel Kraft
                            Cabideiros
                            Cobertores
                            Caixas Colméia
                        </div>
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
                            <img alt="GuardaMoveis" className="imagePage" src={ GuardaMoveislImage }/>
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

export default Packaging