import React from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar>
        <LinkContainer to='/'>
            <Navbar.Brand className='ms-2'>
                <img src='logo.svg' alt='logo' />
            </Navbar.Brand>
        </LinkContainer>

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
        </Nav>
    </Navbar>
  )
}

export default Header