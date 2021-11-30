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
        textTitle="Sobre nossa empresa"
        text="A Speedy Lar Mudança e Transporte Ltda atua na área de transporte de mudanças e guarda móveis sempre adequando às tendências do mercado, oferecendo a você segurança, conforto e qualidade, exigindo dos profissionais, responsabilidade cuidado e compromisso em suas operações. Mais que isso transportamos bens conquistado e para isso promovemos organização e proteção dos mesmo"
        contentImage={ SpeedyImage }
        img={ Background }
        pagination={ 'Home > Empresa' }
    >
     </LayoutPage>
 )
}

export default Business