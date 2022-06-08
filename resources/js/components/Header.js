import React from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

const Header = ({setUser}) => {

    const handleLogout = () => {
        axios.post('/logout').then((response) => {
            setUser(null)
        })
    }

  return (
    <Navbar className='navbar bg-dark rounded ps-2 mt-3 mb-3 border border-secondary' expand='md'>
        <LinkContainer to='/'>
            <Navbar.Brand className='ms-2 zoom'>
                <img className='zoom' src='/assets/logo.svg' alt='logo' />
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto text-white'>
                <LinkContainer to='/owners'>
                    <Nav.Link className='text-white'>
                        Klienti
                    </Nav.Link>
                </LinkContainer>

                <LinkContainer to='/pets'>
                    <Nav.Link className='text-white'>
                        Dzīvnieki
                    </Nav.Link>
                </LinkContainer>

                <LinkContainer to='/visits'>
                    <Nav.Link className='text-white'>
                        Apmeklējumi
                    </Nav.Link>
                </LinkContainer>

                <LinkContainer to='/medicaments'>
                    <Nav.Link className='text-white'>
                        Medikamenti
                    </Nav.Link>
                </LinkContainer>

                <LinkContainer to='/manipulations'>
                    <Nav.Link className='text-white'>
                        Manipulācijas
                    </Nav.Link>
                </LinkContainer>

            </Nav>
            <Nav>
                <Nav.Link className='me-3 text-white' onClick={handleLogout}>
                        Izlogoties
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header