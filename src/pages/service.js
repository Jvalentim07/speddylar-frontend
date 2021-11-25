import * as React from "react"
import LayoutPage from "../components/layoutPage"

const Services = () => {
 return (
    <LayoutPage>
        <div className="imageBackground">a</div>
        <div style={{ display: 'flex', alignItems: "center", flexDirection: "column", padding: '20px' }}>
            <h2 style={{marginBottom: "36px" }}>SERVIÇOS DE MUDANÇAS E TRANSPORTES</h2>
            <div style={{ maxWidth: "710px", marginBottom: "15px", textAlign: "center" }}>A Speedy Lar Mudança e Transporte Ltda procura satisfazer seus clientes proporcionando excelência para suas mudanças residenciais, oferecendo sofisticados e modernos materiais de embalagens, profissionais qualificados, segurança durante transporte, habilidade na desmontagem e montagem dos itens, comodidade e principalmente responsabilidade para melhor atende-lo.</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: 'center'}}>
            <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center'}}>
                <div className="imagePage">Mudança Comercial</div>
                <div className="imagePage">Guarda Moveis</div>
                <div className="imagePage">Içamento</div>
            </div>
            <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                <div className="imagePage">Embalagem</div>
                <div className="imagePage">Montagem e Desmontagem</div>
            </div>
        </div>
    </LayoutPage>
 )
}

export default Services