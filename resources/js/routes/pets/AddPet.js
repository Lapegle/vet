import { React, useState } from 'react'

import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

const AddPet = () => {
    
  const navigate = useNavigate()
  const location = useLocation()

  const axios = require('axios').default

  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [sex, setSex] = useState('M')
  const [species, setSpecies] = useState('')
  const [breed, setBreed] = useState('')
  const [colour, setColour] = useState('')
  const [microchip, setMicrochip] = useState('')

  const submit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/pets', {
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
    }).catch(() => {
      alert('error')
    })

  }

  return (
    <>
    <h2 className='mb-4 text-center'>Pievienot jaunu dzīvnieku</h2>
    <div className='d-flex justify-content-center'>
    <Form onSubmit={submit} className='w-50'>
      <Form.Group className="mb-3" controlId='name'>
        <FloatingLabel
          controlId='name'
          label='Dzīvnieka vārds'
          >
          <Form.Control type='text' placeholder='Jānis Bērziņš'
            onChange={(e) => {setName(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='BirthDate'>
        <FloatingLabel
          controlId='birthDate'
          label='Dzimšanas datums'
          >
          <Form.Control type='date' placeholder='09/03/2003'
            onChange={(e) => {setBirthDate(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='sex'>
        <FloatingLabel
          controlId='sex'
          label='Dzimums'
          >
          <Form.Select placeholder='M/F'
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
          >
          <Form.Control type='text' placeholder='Suns'
            onChange={(e) => {setSpecies(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='breed'>
        <FloatingLabel
          controlId='breed'
          label='Dzīvnieka šķirne'
          >
          <Form.Control type='text' placeholder='Labradors'
            onChange={(e) => {setBreed(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='colour'>
        <FloatingLabel
          controlId='colour'
          label='Dzīvnieka krāsa'
          >
          <Form.Control type='text' placeholder='Zeltaina'
            onChange={(e) => {setColour(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='microchip'>
        <FloatingLabel
          controlId='microchip'
          label='Dzīvnieka čipa numurs'
          >
          <Form.Control type='text' placeholder='1234567812345678'
            onChange={(e) => {setMicrochip(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Button type='submit' variant='primary'>Pievienot</Button>
      <Button className='ms-2' onClick={() => {navigate(-1)}} variant='outline-secondary'>Atpakaļ</Button>
    </Form>
    </div>
    
    </>
  )
}

export default AddPet