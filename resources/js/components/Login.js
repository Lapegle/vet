import React, { useState } from 'react'
import { FloatingLabel, Form, Button, Card, Container } from 'react-bootstrap'

const Login = ({getUser}) => {

    const email = 'user@example.com'
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('/login', {
            email: email,
            password: password,
        }).then((response) => {
            getUser()
        }).catch((response) => {
            alert('Parole nav pareiza')
        })
    }

  return (
      <Container>
          <div style={{marginTop: '26vh'}} className='d-flex justify-content-center'>
            <Card className='w-50 shadow bg-dark p-3 border border-secondary'>
                <Card.Body>
                    <Form onSubmit={handleLogin}>
                    <img className='zoom my-5 mx-auto d-block' src='/assets/logo-big.svg' alt='logo' />
                        <h2 className='text-center mb-3 text-white'>Ielogoties sistēmā</h2>
                        <Form.Group className="mb-3" controlId='password'>
                            <FloatingLabel
                                controlId='password'
                                label='Parole'
                                className='text-white'
                            >
                                <Form.Control type='password' placeholder='secret' className='form-outline bg-dark text-white'
                                    onChange={(e) => {setPassword(e.target.value)}}
                                ></Form.Control>
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant='outline-primary' type='submit' className='float-end mt-1'>Ielogoties</Button>
                    </Form>
                </Card.Body>
            </Card>
          </div>

      </Container>

  )
}

export default Login