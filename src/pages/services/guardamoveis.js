import * as React from "react"

import LayoutPage from "../../components/layoutPage"
import ResidencialImage from '../../images/residencialImage.jpg'
import ComercialImage from '../../images/comercialImage.jpg'
import IcamentoImage from '../../images/icamentoImage.jpg'
import PackingImage from '../../images/embalagemImage.jpg'
import MovingImage from '../../images/movingImage.jpg'
import GuardaMoveislImage from '../../images/guardamoveisImage.jpg'
import { Link } from "gatsby"
import BackgroundKeep from '../../images/backgroundKeep.jpg'

import services from '../../api/services'

class Moveis extends React.Component {
    state = {
        servicesInfo: [],
        title: ''
    }
    async componentDidMount() {
        const data = await services.getServices()
        await this.setState({ 
            servicesInfo: data[0],
            title: data[0].Seo[2].MetaTitle
        })
    }
    render () {
        return (
            <LayoutPage
            title={this.state.title}
            img={ BackgroundKeep }
            pagination={ 'Home > Serviços > Guarda Móveis' }
            textTitle="Guarde suas coisa com segurança"
            text="A Speedy Lar Mudança e Transporte Ltda tem como meta principal a satisfação de seus clientes proporcionando total garantia da qualidade de seus serviços, oferecendo sofisticados e modernos materiais para embalagens, profissionais qualificados, segurança durante transporte, zelo, responsabilidade e cuidados especiais para com seu patrimônio, resultando em total comodidade já a partir de nossa contratação."
            contentImage={ GuardaMoveislImage }
            >
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
                            <img alt="Icamento" className="imagePage" src={ IcamentoImage }/>
                            <div class="overlay">
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>IÇAMENTO</h3>
                                <p style={{ color: "#fff"}}>A Speedy Lar Mudanças dispõe de profissionais treinados para as operações no Serviço de Içamento de Móveis e Objetos</p>
                                <div className="buttonStyle"><Link to="/services/icamento">Saiba mais</Link></div>
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
                            <img alt="Mudança" className="imagePage" src={ MovingImage }/>
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

export default Moveis