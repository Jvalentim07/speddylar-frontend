import React from "react"

// import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaPhoneAlt, FaInstagram, FaPaperPlane, FaFacebookSquare } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";
import Logo from '../../images/logo.png'

import './Navbar.scss'

import siteData from '../../api/services'

class NavigationBar extends React.Component {
    state = {
        itemsMenu: [],
        itemsServices: []
    }
    async componentDidMount() {
        const data = await siteData.getIndexInfo()
        console.log(data)
        await this.setState({ 
            itemsMenu: data[0].Header.Menu,
            itemsServices: data[0].Header.Services,
        })
    }
    // Componente do NavBar
    render () {
        return (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className="info-contact">
                   <div className="info-group">
                        <FaPhoneAlt style={{ marginRight: '15px'}}/>
                        <div>
                            <div style={{ fontWeight: 'bold'}}>Telefone</div>
                            <div>(11) 3989-7408</div>
                        </div>
                   </div>
                   <div className="info-group">
                        <FaInstagram style={{ marginRight: '15px'}}/>
                        <div>
                            <div style={{ fontWeight: 'bold'}}>Instagram</div>
                            <div>@speedylarmudancas</div>
                        </div>
                   </div>
                   <div><img width="250px" src={Logo}></img></div>
                   <div className="info-group">
                        <FaPaperPlane style={{ marginRight: '15px'}}/>
                        <div>
                            <div style={{ fontWeight: 'bold'}}>Email de Contato</div>
                            <div>comercial@speedylarmudancas.com.br</div>
                        </div>
                   </div>
                   <div className="info-group">
                        <FaFacebookSquare style={{ marginRight: '15px'}}/>
                        <div>
                            <div style={{ fontWeight: 'bold'}}>Facebook</div>
                            <div>Speedy Lar Mudanças</div>
                        </div>
                   </div>
                </div>
                <div className="navbar">
                    <div style={{ display: 'flex'}}>
                        { 
                            this.state.itemsMenu.map( item => (
                                <Nav.Link key={item.id} href={`/${item.content}`}>{item.name}</Nav.Link>
                            ))
                        }
                    </div>
                    <NavDropdown title="Serviços" id="basic-nav-dropdown">
                        {
                            this.state.itemsServices.map( item => (
                                <NavDropdown.Item key={item.id} style={{color: 'black'}} href={`http://localhost:8000${item.content}`}>{item.name}</NavDropdown.Item>
                            ))
                        }
                        <NavDropdown.Divider />
                        <NavDropdown.Item style={{color: 'black'}} href="/servicos">Ver Todos Serviços</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
        )
    }
}

export default NavigationBar