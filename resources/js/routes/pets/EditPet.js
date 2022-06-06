import { React, useState, useEffect } from 'react'

import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const EditPet = () => {

    const navigate = useNavigate()
    const { id } = useParams();

    const [name, setName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [sex, setSex] = useState('M')
    const [species, setSpecies] = useState('')
    const [breed, setBreed] = useState('')
    const [colour, setColour] = useState('')
    const [microchip, setMicrochip] = useState('')
  
    const submit = (e) => {
      e.preventDefault()
      axios.put(window.url + '/pets/' + id, {
        name: name,
        birth_date: birthDate,
        sex: sex,
        species: species,
        breed: breed,
        colour: colour,
        microchip: microchip
      })
      .then((response) => {
        navigate('/visits/pet/' + response.data.id)
      })
    }


    useEffect(() => {
        axios.get(window.url + '/pets/' + id)
        .then((response) => {
            setName(response.data.name)
            setBirthDate(response.data.birth_date)
            setSex(response.data.sex)
            setSpecies(response.data.species)
            setBreed(response.data.breed)
            setColour(response.data.colour)
            setMicrochip(response.data.microchip)
        })
    }, [])
      
  

  return (
    <>
    <h2 className='mb-4 text-center'>Rediģēt dzīvnieka datus</h2>
    <div className='d-flex justify-content-center'>
    <Form onSubmit={submit} className='w-50'>
      <Form.Group className="mb-3" controlId='name'>
        <FloatingLabel
          controlId='name'
          label='Dzīvnieka vārds'
          >
          <Form.Control type='text' placeholder='Jānis Bērziņš' defaultValue={name}
            onChange={(e) => {setName(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='BirthDate'>
        <FloatingLabel
          controlId='birthDate'
          label='Dzimšanas datums'
          >
          <Form.Control type='date' placeholder='09/03/2003' defaultValue={birthDate}
            onChange={(e) => {setBirthDate(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='sex'>
        <FloatingLabel
          controlId='sex'
          label='Dzimums'
          >
          <Form.Select placeholder='M/F' value={sex}
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
          <Form.Control type='text' placeholder='Suns' defaultValue={species}
            onChange={(e) => {setSpecies(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='breed'>
        <FloatingLabel
          controlId='breed'
          label='Dzīvnieka šķirne'
          >
          <Form.Control type='text' placeholder='Labradors' defaultValue={breed}
            onChange={(e) => {setBreed(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='colour'>
        <FloatingLabel
          controlId='colour'
          label='Dzīvnieka krāsa'
          >
          <Form.Control type='text' placeholder='Zeltaina' defaultValue={colour}
            onChange={(e) => {setColour(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='microchip'>
        <FloatingLabel
          controlId='microchip'
          label='Dzīvnieka čipa numurs'
          >
          <Form.Control type='text' placeholder='1234567812345678' defaultValue={microchip }
            onChange={(e) => {setMicrochip(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Button type='submit' variant='primary'>Izmainīt</Button>
      <Button className='ms-2' onClick={() => {navigate(-1)}} variant='outline-secondary'>Atpakaļ</Button>
    </Form>
    </div>
    
    </>
  )
}

export default EditPet