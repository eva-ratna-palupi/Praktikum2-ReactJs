import React, { useState } from 'react'
import {
    Form, Container, Button,
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap'

const Navbar1 = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (

        <div>
            <Container>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                        <Form inline>
                            <Form.Control placeholder='search' className='mr-sm-2' />
                            <Button>Search</Button>
                        </Form>
                    </Collapse>
                </Navbar>
            </Container>
        </div>
    )
}

export default Navbar1
