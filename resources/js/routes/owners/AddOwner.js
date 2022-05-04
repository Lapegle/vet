import { React, useState } from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { Axios } from 'axios'
import { useNavigate } from 'react-router-dom'


const AddOwner = () => {

  const navigate = useNavigate();

  const axios = require('axios').default

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const submit = () => {
    axios.post('http://localhost:8000/api/owners', {
      name: name,
      address: address,
      phone: phone
    })
    .then((response) => {
      navigate('/pets/owner/' + response.data.id)
    })
  }

  return (
    <>
    <h1 className='mb-4'>Pievienot jaunu klientu</h1>
    <Form action=''>
      <Form.Group className="mb-3" controlId='name'>
        <FloatingLabel
          controlId='name'
          label='Vārds'
          >
          <Form.Control type='text' placeholder='Jānis Bērziņš'
            onChange={(e) => {setName(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='address'>
        <FloatingLabel
          controlId='address'
          label='Adrese'
          >
          <Form.Control type='text' placeholder='Varoņu iela 11A, Rēzekne'
            onChange={(e) => {setAddress(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='phone'>
        <FloatingLabel
          controlId='phone'
          label='Telefona numurs'
          >
          <Form.Control type='text' placeholder='20000000'
            onChange={(e) => {setPhone(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Button variant='primary' onClick={submit}>Pievienot</Button>
    </Form>
    </>

  )
}

export default AddOwner