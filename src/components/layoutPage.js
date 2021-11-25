import React from "react"
import { Link } from "gatsby"

import './layout.scss'

import NavBar from '../components/Navbar/Navbar'
import Logo from '../images/logo.png'
// import Form from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import { FaPhoneAlt, FaPaperPlane, FaInstagram, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";

// import { Link } from "gatsby"

const LayoutPage = (prop) => {
  return (
    <div className="content">
      <div style={{ width: '100%', backgroundColor: '#FF8120' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', color: 'whitesmoke' }}>
          <Link to="https://www.facebook.com/speedylarmudancas/"><FaFacebookSquare style={{ color: 'whitesmoke', height: '24px' }}></FaFacebookSquare></Link>
          <div>comercial@speedylarmudancas.com.br</div>
        </div>
      </div>
      <div className="headerContent">
        <div className="logo"><img width="300px" src={Logo} alt='logo' /></div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaWhatsapp style={{ width: '35px', height: '35px', color: '#FF8120', lineHeight: '48px', marginRight: '15px' }}></FaWhatsapp>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            Fale Conosco
            <Link to="https://api.whatsapp.com/send?phone=551139897408&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Speedy%20Lar%20Mudan%C3%A7as" style={{ color: '#245E70', textDecoration: 'none'}}>(11) 3989-7408</Link>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <NavBar />
        <div style={{ height: '75px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px',marginBottom: '15px' }}>{ prop.pagination }</div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ maxHeight: '300px', width: '100%', minHeight: '500px'}} className="mainContent">
            <img alt="Fundo" style={{ zIndex: '1', width: '100%', height: '550px'}} src={ prop.img }/>
            <div className="background">
              <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h2 style={{ color: 'whitesmoke', fontSize: '60px', fontWeight: '700', textAlign: 'center' }}>{prop.title}</h2>
                <p style={{ color: 'white', textAlign: 'center'}}>{prop.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
          {/* <main>{children}</main> */}
        <main style={{ marginTop: '70px' }}>{prop.children}</main>
        {/* Rodape do Site */}
        <div className="footer">
          <div className="footerGroup" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%", padding: "20px" }}>
            <div className="footerLogo">
              <div style={{ display: 'flex', marginBottom: '15px' }}><img src={Logo} alt='logo' /></div>
              <div style={{ maxWidth: "360px", fontSize: '14px'}}>Empresa especializada em Mudanças Residenciais, Mudanças Comerciais, Içamentos, Remoções, Guarda Móveis e Transportes em Geral.</div>
            </div>
            <div>
              <div className="footerTitle">Contato</div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaPaperPlane style={{ width: '28px', height: '28px', marginRight: '15px' }}></FaPaperPlane>
                <div>
                  <p style={{ marginBottom: '0px'}}>Email:</p>
                  <div>comercial@speedylarmudancas.com.br</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaPhoneAlt style={{ width: '28px', height: '28px', marginRight: '15px' }}></FaPhoneAlt>
                <div>
                  <p style={{ marginBottom: '0px'}}>Telefone:</p>
                  <div>(11) 3989-7408</div>
                </div>
              </div>
            </div>
            <div className="footerTitle">
              Redes Socias
              <div><FaInstagram  style={{ marginRight: '10px'}}></FaInstagram>@speedylarmudancas</div>
              <div><FaFacebookSquare style={{ marginRight: '10px'}}></FaFacebookSquare>Speedy Lar Mudanças</div>
            </div>
          </div>
        </div>
        {/* Fim do Rodape */}
      </div>
    </div>
  )
}

export default LayoutPage
