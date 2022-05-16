import { React, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

const AddVisit = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [temperature, setTemperature] = useState('')
    const [heartRate, setHeartRate] = useState('')
    const [breathRate, setBreathRate] = useState('')
    const [mood, setMood] = useState('')
    const [history, setHistory] = useState('')
    const [diagnosis, setDiagnosis] = useState('')
    const [instructions, setInstructions] = useState('')
    const [notes, setNotes] = useState('')
    const [price, setPrice] = useState('')


    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/visits', {
            pet_id: location.state.pet,
            temperature: temperature,
            heart_rate: heartRate,
            breath_rate: breathRate,
            mood: mood,
            history: history,
            diagnosis: diagnosis,
            instructions: instructions,
            notes: notes,
            price: price
          })
        //   .then((response) => {
        //     navigate('/visits/pet/' + response.data.id)
        //   })
        .then((response) => {
            navigate(-1)
        })
    }
    

  return (
    <>
    <h2 className='mb-4 text-center'>Pievienot jaunu apmeklējumu</h2>
    <div className='d-flex justify-content-center'>
    <Form onSubmit={submit} className='w-50'>
      <Form.Group className="mb-3" controlId='temperature'>
        <FloatingLabel
          controlId='temperature'
          label='Temperatūra'
          >
          <Form.Control type='text' placeholder='37'
            onChange={(e) => {setTemperature(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='heartRate'>
        <FloatingLabel
          controlId='heartRate'
          label='Sirds ritms'
          >
          <Form.Control type='text' placeholder='100'
            onChange={(e) => {setHeartRate(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='breathRate'>
        <FloatingLabel
          controlId='breathRate'
          label='Elpošanas ritms'
          >
          <Form.Control type='text' placeholder='20'
            onChange={(e) => {setBreathRate(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='mood'>
        <FloatingLabel
          controlId='mood'
          label='Noskaņojums'
          >
          <Form.Control type='text' placeholder='Labs'
            onChange={(e) => {setMood(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='history'>
        <FloatingLabel
          controlId='history'
          label='Anamnēze'
          >
          <Form.Control as='textarea' type='text' placeholder='Sāpes'
            onChange={(e) => {setHistory(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='diagnosis'>
        <FloatingLabel
          controlId='diagnosis'
          label='Diagnoze'
          >
          <Form.Control as='textarea' type='text' placeholder='Nāve'
            onChange={(e) => {setDiagnosis(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='instructions'>
        <FloatingLabel
          controlId='instructions'
          label='Instrukcijas saimniekam'
          >
          <Form.Control as='textarea' type='text' placeholder='Šprice vienreiz dienā'
            onChange={(e) => {setInstructions(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='notes'>
        <FloatingLabel
          controlId='notes'
          label='Piezīmes'
          >
          <Form.Control as='textarea' type='text' placeholder='Piezīmes'
            onChange={(e) => {setNotes(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='price'>
        <FloatingLabel
          controlId='price'
          label='Pakalpojumu cena'
          >
          <Form.Control type='text' placeholder='100'
            onChange={(e) => {setPrice(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Button type='submit' variant='primary'>Pievienot</Button>
    </Form>
    </div>


    </>
  )
}

export default AddVisit