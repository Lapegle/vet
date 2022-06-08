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
          <div style={{marginTop: '36vh'}} className='d-flex justify-content-center'>
            <Card className='w-50 shadow'>
                <Card.Body>
                    <Form onSubmit={handleLogin}>
                        <h2 className='text-center mb-3'>Ielogoties sistēmā</h2>
                        <Form.Group className="mb-3" controlId='password'>
                            <FloatingLabel
                                controlId='password'
                                label='Parole'
                                >
                                <Form.Control type='password' placeholder='secret'
                                    onChange={(e) => {setPassword(e.target.value)}}
                                ></Form.Control>
                            </FloatingLabel>
                        </Form.Group>
                        <Button type='submit' className='btn btn-primary float-end'>Ielogoties</Button>
                    </Form>
                </Card.Body>
            </Card>
          </div>

      </Container>

  )
}

export default Login