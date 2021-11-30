import React from "react"
import { Link } from "gatsby"

import './layout.scss'

import NavBar from '../components/Navbar/Navbar'
import Logo from '../images/logo.png'
import ResidencialImage from '../images/speedyImage.jpg'
// import Form from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import { FaPhoneAlt, FaPaperPlane, FaInstagram, FaFacebookSquare, FaLock, FaAngleDoubleRight, FaFlag } from "react-icons/fa";

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
      <NavBar />
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <img alt="Fundo" style={{ zIndex: '1', width: '70%', height: '350px'}} src={ prop.img }/>
          <div className="background">
              <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ fontSize: '17px', fontWeight: 'bold', color: '#FF8120'}}>SERVIÇOS DE MUDANÇAS E TRANSPORTES</div>
                <h2 style={{ color: 'whitesmoke', fontSize: '60px', fontWeight: '700', textAlign: 'center' }}>{prop.title}</h2>
                <p style={{ color: 'white', textAlign: 'center'}}>{prop.subtitle}</p>
              </div>
          </div>
          {/* <div style={{ width: '70%', backgroundColor: 'lightgrey', height: '350px'}}>Imagem Fundo</div> */}
        </div>
        {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
          <div style={{ maxHeight: '300px', width: '100%', minHeight: '500px'}} className="mainContent">
            <img alt="Fundo" style={{ zIndex: '1', width: '100%', height: '550px'}} src={ prop.img }/>
            <div className="background">
              <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h2 style={{ color: 'whitesmoke', fontSize: '60px', fontWeight: '700', textAlign: 'center' }}>{prop.title}</h2>
                <p style={{ color: 'white', textAlign: 'center'}}>{prop.subtitle}</p>
              </div>
            </div>
          </div>
        </div> */}
        <div style={{ display: 'flex', width: '100%', marginTop: '50px', justifyContent: 'center'}}>
          <div style={{ display: 'flex', width: '70%', height: '100%', marginBottom: '25px'}}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '50%'}}>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px', marginBottom: '25px' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#FF8120'}}>TRANSPORTE E SEGURANÇA</div>
                  <h3 style={{ color:'#245E70', fontWeight: 'bold'}}>{ prop.textTitle }</h3>
                  <div>{ prop.text }</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{ backgroundColor: '#FF8120', width: '40%', height: '215px', maxWidth: '300px', display: 'flex', flexDirection: 'column', color: 'whitesmoke', justifyContent: 'center', alignItems: 'center'}}>
                  <FaFlag style={{ width: '50px', height: '50px' }}/>
                  <div>Alta qualidade.</div>
                </div>
                <div style={{ backgroundColor: '#FF8120', width: '40%', height: '255px', maxWidth: '300px', display: 'flex', flexDirection: 'column', color: 'whitesmoke', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 1em #1a1a1aa8' }}>
                  <FaLock style={{ width: '50px', height: '50px' }}/>
                  <div>Sua mudança com segurança.</div>
                </div>
                <div style={{ backgroundColor: '#FF8120', width: '40%', height: '215px', maxWidth: '300px', display: 'flex', flexDirection: 'column', color: 'whitesmoke', justifyContent: 'center', alignItems: 'center' }}>
                  <FaAngleDoubleRight style={{ width: '50px', height: '50px' }}/>
                  <div>Mudança com agilidade.</div>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: 'lightgray', width: '50%', marginLeft: '2%' }}><img alt="Fundo" style={{ width: '100%', height: '100%'}} src={ prop.contentImage }/></div>
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
