import { React, useState } from 'react'

import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const AddOwner = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const submit = (e) => {
    e.preventDefault()
    axios.post('/api/owners', {
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
    <h2 className='mb-4 text-center text-white'>Pievienot jaunu klientu</h2>
    <div className='d-flex justify-content-center'>
    <Form onSubmit={submit} className="w-50">
      <Form.Group className="mb-3" controlId='name'>
        <FloatingLabel
          controlId='name'
          label='Vārds un uzvārds'
          className='text-white'
          >
          <Form.Control type='text' placeholder='Jānis Bērziņš' className='form-outline bg-dark text-white'
            onChange={(e) => {setName(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='address'>
        <FloatingLabel
          controlId='address'
          label='Adrese'
          className='text-white'
          >
          <Form.Control type='text' placeholder='Varoņu iela 11A, Rēzekne' className='form-outline bg-dark text-white'
            onChange={(e) => {setAddress(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='phone'>
        <FloatingLabel
          controlId='phone'
          label='Telefona numurs'
          className='text-white'
          >
          <Form.Control type='text' placeholder='20000000' className='form-outline bg-dark text-white'
            onChange={(e) => {setPhone(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Button type='submit' variant='outlineprimary'>Pievienot</Button>
      <Button className='ms-2' onClick={() => {navigate(-1)}} variant='outline-secondary'>Atpakaļ</Button>
    </Form>
    </div>

    </>

  )
}

export default AddOwner