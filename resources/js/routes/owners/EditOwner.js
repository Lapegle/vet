import { React, useState, useEffect } from 'react'

import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'


const EditOwner = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const submit = () => {
    axios.put(window.url + '/owners/' + id, {
      name: name,
      address: address,
      phone: phone
    })
    .then((response) => {
      navigate('/pets/owner/' + response.data.id)
    })
  }

  useEffect(() => {
      axios.get(window.url + '/owners/' + id)
      .then((response) => {
          setName(response.data.name)
          setAddress(response.data.address)
          setPhone(response.data.phone)
      })
  }, [])
  return (
    <>
    <h2 className='mb-4 text-center'>Rediģēt klienta datus</h2>
    <div className='d-flex justify-content-center'>
    <Form action='' className='w-50'>
      <Form.Group className="mb-3" controlId='name'>
        <FloatingLabel
          controlId='name'
          label='Vārds'
          >
          <Form.Control type='text' placeholder='Jānis Bērziņš'
            defaultValue={name}
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
            defaultValue={address}
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
            defaultValue={phone}
            onChange={(e) => {setPhone(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Button variant='primary' onClick={submit}>Izmainīt</Button>
      <Button className='ms-2' onClick={() => {navigate(-1)}} variant='outline-secondary'>Atpakaļ</Button>
    </Form>
    </div>
    
    </>

  )
}

export default EditOwner