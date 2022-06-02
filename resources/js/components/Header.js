import React from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar className='navbar navbar-light rounded ps-2 mt-2 mb-3 shadow' style={{backgroundColor: '#fafafa', backdropFilter: 'blur(5px)'}} expand='md'>
        <LinkContainer to='/'>
            <Navbar.Brand className='ms-2 zoom'>
                <img className='zoom' src='/assets/logo.svg' alt='logo' />
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <LinkContainer to='/owners'>
                    <Nav.Link>
                        Klienti
                    </Nav.Link>
                </LinkContainer>

                <LinkContainer to='/pets'>
                    <Nav.Link>
                        Dzīvnieki
                    </Nav.Link>
                </LinkContainer>

                <LinkContainer to='/visits'>
                    <Nav.Link>
                        Apmeklējumi
                    </Nav.Link>
                </LinkContainer>

                <LinkContainer to='/medicaments'>
                    <Nav.Link>
                        Medikamenti
                    </Nav.Link>
                </LinkContainer>

                <LinkContainer to='/manipulations'>
                    <Nav.Link>
                        Manipulācijas
                    </Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header