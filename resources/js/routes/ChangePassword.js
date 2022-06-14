import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form, Button, Card } from 'react-bootstrap'
import { toast } from 'react-toastify'



const ChangePassword = ({setUser}) => {

    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        axios.put('api/passwordreset', {
            current_password: oldPassword,
            password: password
        }).then((response) => {
            axios.post('/logout').then((response) => {
                setUser(null)
            })
        }).catch((response) => {
            toast.warn("Vecā parole ir ievadīta nepareizi", {theme: "colored"})
        })
        // axios.put('user/password', {
        //     current_password: 'password',
        //     password: 'qwerty123'
        // }).then((response) => {
        //     console.log(response)
        // }).catch((response) => {
        //     console.log(response)
        // })
    }

  return (
    <div style={{marginTop: '26vh'}} className='d-flex justify-content-center'>
    <Card className='w-50 shadow bg-dark p-3 border border-secondary'>
        <Card.Body>
            <Form onSubmit={handleChange}>
                <h2 className='text-center mb-3 text-white'>Nomainīt paroli</h2>
                <Form.Group className="mb-3" controlId='oldpassword'>
                    <FloatingLabel
                        controlId='oldpassword'
                        label='Vecā parole'
                        className='text-white'
                    >
                        <Form.Control type='password' placeholder='secret' className='form-outline bg-dark text-white'
                            onChange={(e) => {setOldPassword(e.target.value)}}
                        ></Form.Control>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId='password'>
                    <FloatingLabel
                        controlId='password'
                        label='Jaunā parole'
                        className='text-white'
                    >
                        <Form.Control type='password' placeholder='secret' className='form-outline bg-dark text-white'
                            onChange={(e) => {setPassword(e.target.value)}}
                        ></Form.Control>
                    </FloatingLabel>
                </Form.Group>
                <Button variant='outline-warning' type='submit' className='float-end mt-1'>Mainīt paroli</Button>
            </Form>
        </Card.Body>
    </Card>
  </div>
  )
}

export default ChangePassword