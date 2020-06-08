import React, { Component, useState } from 'react'
import { Jumbotron, Container, 
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import './CSS/BootstrapComp.css'

class BootstrapComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
             collapsed: useState,
             setCollapsed: useState,
             }
        
    }
    toggleNavbar = () => this.state.setCollapsed(!this.state.collapsed)

    render() {
        return (

            <div>
                <Container>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">Hallo!</h1>
                            <p className="lead"> Selamat datang di Aplikasi Bengkel Online</p>
                            <p className="text-info">Created by: Eva Ratna Palupi</p>
                        </Container>
                    </Jumbotron>
                </Container>
                    <Container>
                        <Navbar color="faded" light>
                            <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                            <Collapse isOpen={!this.state.collapsed} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href="/components/">Components</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Container>
            </div>
        )
    }

}

export default BootstrapComp