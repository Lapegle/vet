import { React, useState } from 'react'

import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const AddOwner = () => {

  const navigate = useNavigate()

  const axios = require('axios').default

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const submit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/owners', {
      name: name,
      address: address,
      phone: phone
    })
    .then((response) => {
      navigate('/pets/owner/' + response.data.id)
    }).catch(() => {
      alert('error')
    })

  }

  return (
    <>
    <h2 className='mb-4 text-center'>Pievienot jaunu klientu</h2>
    <div className='d-flex justify-content-center'>
    <Form onSubmit={submit} className="w-50">
      <Form.Group className="mb-3" controlId='name'>
        <FloatingLabel
          controlId='name'
          label='Vārds un uzvārds'
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
      <Button type='submit' variant='primary'>Pievienot</Button>
    </Form>
    </div>

    </>

  )
}

export default AddOwner