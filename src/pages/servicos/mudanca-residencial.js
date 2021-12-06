import * as React from "react"

import LayoutPage from "../../components/layoutPage"
import BackgroundResidencial from '../../images/backgroundResidencial.jpg'
import ComercialImage from '../../images/comercialImage.jpg'
import GuardaMoveislImage from '../../images/guardamoveisImage.jpg'
import IcamentoImage from '../../images/icamentoImage.jpg'
import PackingImage from '../../images/embalagemImage.jpg'
import MovingImage from '../../images/movingImage.jpg'
import ResidencialImage from '../../images/residencialImage.jpg'
import { Link } from "gatsby"

import services from '../../api/services'

import '../index.scss'

class Residencial extends React.Component {
    state = {
        servicesInfo: [],
        title: '',
        description: ''
    }
    async componentDidMount() {
        const data = await services.getServices()
        await this.setState({ 
            servicesInfo: data[0],
            title: data[0].Seo[0].MetaTitle,
            description: data[0].Seo[0].Metas[0].content
        })
        console.log(this.state)
    }
    render () {
        return (
            <LayoutPage
            title={this.state.title}
            img={ BackgroundResidencial }
            pagination={ 'Home > Serviços > Mudança Residencial' }
            textTitle="Mudança residencial sem dor de cabeça"
            text="A Speedy Lar Mudança e Transporte Ltda procura satisfazer seus clientes proporcionando excelência para suas mudanças residenciais, oferecendo sofisticados e modernos materiais de embalagens, profissionais qualificados, segurança durante transporte, habilidade na desmontagem e montagem dos itens, comodidade e principalmente responsabilidade para melhor atende-lo."
            contentImage={ ResidencialImage }
            >
                <div style={{ display: "flex", flexDirection: "column", alignItems: 'center'}}>
                    <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center'}}>
                        <div className="container">
                            <img alt="Comercial" className="imagePage" src={ ComercialImage }/>
                            <div className="overlay">
                                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>MUDANÇA COMERCIAL</h3>
                                <p style={{ color: "#fff"}}>Oferecemos assistência com segurança e suporte de acordo com a necessidade de cada empresa para sua Mudança</p>
                                <div className="buttonStyle"><Link to="/services/comercial">Solicite</Link></div>
                            </div>
                        </div>
                        <div className="container">
                            <img alt="GuardaImagem" className="imagePage" src={ GuardaMoveislImage }/>
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
                            <img alt="Mudanca" className="imagePage" src={ MovingImage }/>
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

export default Residencial