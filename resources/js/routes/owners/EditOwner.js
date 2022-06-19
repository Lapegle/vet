import { React, useState, useEffect } from 'react'

import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

const EditOwner = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const submit = () => {
    axios.put('/api/owners/' + id, {
      name: name,
      address: address,
      phone: phone
    })
    .then((response) => {
      navigate('/pets/owner/' + response.data.id)
      toast.success('Klienta dati rediģēti veiksmīgi', {theme: "colored"})
    }).catch(() => {
      toast.error('Radās kļūda mēģinot rediģēt klientu', {theme: "colored"})
    })
  }

  useEffect(() => {
      axios.get('/api/owners/' + id)
      .then((response) => {
          setName(response.data.name)
          setAddress(response.data.address)
          setPhone(response.data.phone)
      })
  }, [])
  return (
    <>
    <h2 className='mb-4 text-center text-white'>Rediģēt klienta datus</h2>
    <div className='d-flex justify-content-center'>
    <Form action='' className='w-50'>
      <Form.Group className="mb-3" controlId='name'>
        <FloatingLabel
          controlId='name'
          label='Vārds'
          className='text-white'
          >
          <Form.Control type='text' placeholder='Jānis Bērziņš' className='form-outline bg-dark text-white' required maxLength={45}
            defaultValue={name}
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
          <Form.Control type='text' placeholder='Varoņu iela 11A, Rēzekne' className='form-outline bg-dark text-white' required maxLength={255}
            defaultValue={address}
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
          <Form.Control type='text' placeholder='20000000' className='form-outline bg-dark text-white' required maxLength={45}
            defaultValue={phone}
            onChange={(e) => {setPhone(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Button variant='outline-primary' className='float-end ms-2' onClick={submit}>Izmainīt</Button>
      <Button className='float-end ms-2' onClick={() => {navigate(-1)}} variant='outline-secondary'>Atpakaļ</Button>
    </Form>
    </div>
    
    </>

  )
}

export default EditOwner