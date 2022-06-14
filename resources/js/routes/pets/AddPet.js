import { React, useState } from 'react'

import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

import { toast } from 'react-toastify'

const AddPet = () => {
    
  const navigate = useNavigate()
  const location = useLocation()

  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [sex, setSex] = useState('M')
  const [species, setSpecies] = useState('')
  const [breed, setBreed] = useState('')
  const [colour, setColour] = useState('')
  const [microchip, setMicrochip] = useState('')

  const submit = (e) => {
    e.preventDefault()
    axios.post('/api/pets', {
      name: name,
      owner_id: location.state.owner,
      birth_date: birthDate,
      sex: sex,
      species: species,
      breed: breed,
      colour: colour,
      microchip: microchip
    })
    .then((response) => {
      navigate('/visits/pet/' + response.data.id)
      toast.success('Jauns dzīvnieks pievienots veiksmīgi', {theme: "colored"})
    }).catch(() => {
      toast.error('Radās kļūda mēģinot pievienot dzīvnieku', {theme: "colored"})
    })

  }

  return (
    <>
    <h2 className='mb-4 text-center text-white'>Pievienot jaunu dzīvnieku</h2>
    <div className='d-flex justify-content-center'>
    <Form onSubmit={submit} className='w-50'>
      <Form.Group className="mb-3" controlId='name'>
        <FloatingLabel
          controlId='name'
          label='Dzīvnieka vārds'
          className='text-white'
          >
          <Form.Control type='text' placeholder='Jānis Bērziņš' className='form-outline bg-dark text-white' required
            onChange={(e) => {setName(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='BirthDate'>
        <FloatingLabel
          controlId='birthDate'
          label='Dzimšanas datums'
          className='text-white'
          >
          <Form.Control type='date' placeholder='09/03/2003' className='form-outline bg-dark text-white'
            onChange={(e) => {setBirthDate(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='sex'>
        <FloatingLabel
          controlId='sex'
          label='Dzimums'
          className='text-white'
          >
          <Form.Select placeholder='M/F' className='form-outline bg-dark text-white' required
            onChange={(e) => {setSex(e.target.value)}}
          >
              <option value={'M'}>M</option>
              <option value={'F'}>F</option>
          </Form.Select>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='species'>
        <FloatingLabel
          controlId='species'
          label='Dzīvnieka suga'
          className='text-white'
          >
          <Form.Control type='text' placeholder='Suns' className='form-outline bg-dark text-white' required
            onChange={(e) => {setSpecies(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='breed'>
        <FloatingLabel
          controlId='breed'
          label='Dzīvnieka šķirne'
          className='text-white'
          >
          <Form.Control type='text' placeholder='Labradors' className='form-outline bg-dark text-white' required
            onChange={(e) => {setBreed(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='colour'>
        <FloatingLabel
          controlId='colour'
          label='Dzīvnieka krāsa'
          className='text-white'
          >
          <Form.Control type='text' placeholder='Zeltaina' className='form-outline bg-dark text-white' required
            onChange={(e) => {setColour(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='microchip'>
        <FloatingLabel
          controlId='microchip'
          label='Dzīvnieka čipa numurs'
          className='text-white'
          >
          <Form.Control type='text' placeholder='1234567812345678' className='form-outline bg-dark text-white'
            onChange={(e) => {setMicrochip(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Button type='submit' variant='primary'className='float-end ms-2'>Pievienot</Button>
      <Button className='float-end ms-2' onClick={() => {navigate(-1)}} variant='outline-secondary'>Atpakaļ</Button>
    </Form>
    </div>
    
    </>
  )
}

export default AddPet