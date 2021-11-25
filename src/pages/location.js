import * as React from "react"
import LayoutPage from "../components/layoutPage"
import LocationImage from '../images/budget.jpg'

import '../components/pages.scss'

const Location = () => {
 return (
    <LayoutPage 
        title="Localização" 
        subtitle="PROFISSIONAIS QUALIFICADOS, SEGURANÇA NO TRANSPORTE E ZELO EM SUA MUDANÇA."
        img={ LocationImage }
        pagination={ 'Home > Localização' }
    >
        <div style={{ display: 'flex', alignItems: 'center',  flexDirection: 'column', marginBottom: '50px', padding: '20px' }}>
            <div style={{marginBottom: "20px"}}>
                <h3 style={{fontSize: "24px"}}>Endereço</h3>
                <div style={{ maxWidth: "560px", fontSize: "14px"}}>Rua Gérson Pereira de Brito, 167 - Vila Penteado São Paulo - SP - CEP: 02844-180</div>
            </div>
            <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14638.9966319173!2d-46.684743!3d-23.469511!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea3d4950e31608fb!2sSpeedy%20Lar%20Mudan%C3%A7as%20%7C%20Mudan%C3%A7as%20Residenciais%20%7C%20Mudan%C3%A7as%20Comerciais!5e0!3m2!1spt-BR!2sbr!4v1633635678211!5m2!1spt-BR!2sbr" width="1250" height="450" style={{border: '0',  maxWidth: '100%'}} allowfullscreen="" loading="lazy"></iframe>
        </div>
    </LayoutPage>
 )
}

export default Location