import React from "react"

// import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { FaBars } from "react-icons/fa";

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
            <div style={{ width: "100%" }}>
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
                        <NavDropdown.Item style={{color: 'black'}} href="/services">Ver Todos Serviços</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
        )
    }
}

export default NavigationBar