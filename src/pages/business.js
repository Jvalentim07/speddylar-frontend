import * as React from "react"
import LayoutPage from "../components/layoutPage"

import SpeedyImage from '../images/speedyImage.jpg'
import Background from '../images/background.jpg'

import '../components/pages.scss'

const Business = () => {
 return (
     <LayoutPage 
        title="EMPRESA" 
        subtitle="PROFISSIONAIS QUALIFICADOS, SEGURANÇA NO TRANSPORTE E ZELO EM SUA MUDANÇA."
        img={ Background }
        pagination={ 'Home > Empresa' }
    >
         <div>
             {/* <div>
                <div>
                    <img alt="Fundo" style={{ zIndex: '0', width: '100%', height: '550px'}} src={ Background }/>
                    <div className="overlayPage" style={{ display: 'flex', justifyContent: 'center'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '25px', justifyContent: 'center'}}>
                            <h3 style={{ fontSize: '60px', fontWeight: '700', color: 'white' }}>EMPRESA</h3>
                            <p style={{ color: 'white'}}>PROFISSIONAIS QUALIFICADOS, SEGURANÇA NO TRANSPORTE E ZELO EM SUA MUDANÇA.</p>
                            <div className='buttonStyle' style={{ width: '500px'}}><Link>FAÇA UM ORÇAMENTO ONLINE SEM COMPROMISSO</Link></div>
                        </div>
                    </div>
                </div>
             </div> */}
            <div className="contentGroup" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ padding: "20px" }}>
                    <div style={{marginBottom: "20px"}}>
                        <h3 style={{fontSize: "24px"}}>EMPRESA DE MUDANÇAS E TRANSPORTES</h3>
                        <div style={{ maxWidth: "560px", fontSize: "14px"}}>A Speedy Lar Mudança e Transporte Ltda atua na área de transporte de mudanças e guarda móveis sempre adequando às tendências do mercado, oferecendo a você segurança, conforto e qualidade, exigindo dos profissionais, responsabilidade cuidado e compromisso em suas operações. Mais que isso transportamos bens conquistado e para isso promovemos organização e proteção dos mesmo.</div>
                    </div>
                    <div style={{marginBottom: "20px"}}>
                        <h4 style={{fontSize: "18px"}}>Missão</h4>
                        <div style={{ maxWidth: "590px", fontSize: "14px" }}>Nossa missão é oferecer ao nosso cliente serviço de qualidade diferenciado, com comprometimento segurança e responsabilidade com a melhor opção de custo/benefício. Presta serviço no qual traga confoto e evite transtorno que a ocasião possa promover.</div>
                        
                        <div style={{ fontSize: "14px" }}>Por isso você pode contar com a Speedy Lar Mudança e Transporte Ltda.</div>
                    </div>
                    <div>
                        <h4 style={{fontSize: "18px"}}>Nossa Visão</h4>
                        <div style={{ maxWidth: "540px", fontSize: "14px" }}>Com nosso comprometimento e satisfação aos nossos cliente, queremos nos manter lider no mercado e sempre aprimora nosso serviços com ferramenta adequadas e tecnologia. E aos nossos profissionais promover satisfaçao de trabalho.</div>
                    </div>
                </div>
                <div style={{ width: '35%', display: 'flex', justifyContent: 'center' }}>
                   <img alt="textImage" style={{ maxWidth: "560px", minWidth: "300px" }} width="100%" src={SpeedyImage} />
                </div>
            </div>
         </div>
     </LayoutPage>
 )
}

export default Business