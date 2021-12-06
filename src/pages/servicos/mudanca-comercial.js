import * as React from "react"
import LayoutPage from "../../components/layoutPage"
import ResidencialImage from '../../images/residencialImage.jpg'
import GuardaMoveislImage from '../../images/guardamoveisImage.jpg'
import IcamentoImage from '../../images/icamentoImage.jpg'
import PackingImage from '../../images/embalagemImage.jpg'
import MovingImage from '../../images/movingImage.jpg'
import ComercialImage from '../../images/comercialImage.jpg'
import BackgroundComercial from '../../images/backgroundComercial.jpg'
import { Link } from "gatsby"

import services from '../../api/services'

class Comercial extends React.Component {
    state = {
        servicesInfo: [],
        title: ''
    }
    async componentDidMount() {
        const data = await services.getServices()
        await this.setState({ 
            servicesInfo: data[0],
            title: data[0].Seo[1].MetaTitle
        })
    }
    render() {
        return (
            <LayoutPage
            title={this.state.title}
            img={ BackgroundComercial }
            pagination={ 'Home > Serviços > Mudança Comercial' }
            textTitle="Mudança comercial sem dor de cabeça"
            text="A Speedy Lar Mudança e Transporte Ltda oferece a melhor assistência, com segurança habilidade e todo tipo de suporte de acordo com a necessidade de cada empresa."
            contentImage={ ComercialImage}
            >
                <div style={{ display: "flex", flexDirection: "column", alignItems: 'center'}}>
                    <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center'}}>
                        <div className="container">
                            <img alt="Residencial" className="imagePage" src={ ResidencialImage }/>
                            <div className="overlay">
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>MUDANÇA</h3>
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>RESIDENCIAL</h3>
                                <p style={{ color: "#fff"}}>A Speedy Lar Mudanças oferece materiais de embalagens, profissionais treinados e segurança para sua mudança</p>
                                <div className="buttonStyle"><Link to="/services/residencial">Saiba Mais</Link></div>
                            </div>
                        </div>
                        <div className="container">
                            <img alt="GuardaMoveis" className="imagePage" src={ GuardaMoveislImage }/>
                            <div className="overlay">
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>GUARDA MÓVEL</h3>
                                <p style={{ color: "#fff"}}>Dispomos de guarda-móveis com box de vários tamanhos e amplos espaços para armazenagem para diversos objetos</p>
                                <div className="buttonStyle"><Link to="/services/guardamoveis">Entre em contato</Link></div>
                            </div>
                        </div>
                        <div className="container">
                            <img alt="Icamento" className="imagePage" src={ IcamentoImage }/>
                            <div className="overlay">
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>IÇAMENTO</h3>
                                <p style={{ color: "#fff"}}>A Speedy Lar Mudanças dispõe de profissionais treinados para as operações no Serviço de Içamento de Móveis e Objetos</p>
                                <div className="buttonStyle"><Link to="/services/icamento">Saiba mais</Link></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                        <div className="container">
                            <img alt="Embalagem" className="imagePage" src={ PackingImage }/>
                            <div className="overlay">
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>EMBALAGEM</h3>
                                <p style={{ color: "#fff"}}>Nossas embalagens vão de acordo com as necessidades de nossos clientes, garantindo proteção e segurança</p>
                                <div className="buttonStyle"><Link to="/services/icamento">Solicite</Link></div>
                            </div>
                        </div>
                        <div className="container">
                            <img alt="Montagem" className="imagePage" src={ MovingImage }/>
                            <div className="overlay">
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

export default Comercial