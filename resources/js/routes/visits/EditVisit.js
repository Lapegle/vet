import axios from 'axios'
import { React, useEffect, useState } from 'react'

import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useNavigate, useLocation, useParams } from 'react-router-dom'

const EditVisit = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()

  const [medicamentList, setMedicamentList] = useState([])
  const [manipulationList, setManipulationList] = useState([])

  const [temperature, setTemperature] = useState('')
  const [heartRate, setHeartRate] = useState('')
  const [breathRate, setBreathRate] = useState('')
  const [mood, setMood] = useState('')
  const [history, setHistory] = useState('')
  const [diagnosis, setDiagnosis] = useState('')
  const [instructions, setInstructions] = useState('')
  const [notes, setNotes] = useState('')
  const [price, setPrice] = useState('')

  const [medicaments ,setMedicaments] = useState([])
  const [manipulations ,setManipulations] = useState([])

  const submit = (e) => {
    e.preventDefault()
    axios.put('/api/visits/' + id, {
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
      // .then((response) => {
      //   medicaments.forEach(value => {
      //     axios.post('/api/usedmedicaments', {
      //       visit_id: response.data.id,
      //       medicament_id: value
      //     })
      //   })
      //   manipulations.forEach(value => {
      //     axios.post('/api/usedmanipulations', {
      //       visit_id: response.data.id,
      //       manipulation_id: value
      //     })
      //   })
      //   navigate('/visit/' + response.data.id)
      // })

  }  

  const deleteMedicament = (value) => {
    setMedicaments(medicaments.filter(item => item.id !== value))
  }

  const deleteManipulation = (value) => {
    setManipulations(manipulations.filter(item => item !== value))
  }

  useEffect(() => {
    axios.get('/api/medicaments').then((response) => {
      setMedicamentList(response.data)
    })
    axios.get('/api/manipulations').then((response) => {
      setManipulationList(response.data)
    })
    axios.get('/api/usedmedicaments/' + id).then((response) => {
      setMedicaments(response.data)
    })
    axios.get('/api/usedmanipulations/' + id).then((response) => {
      setManipulations(response.data)
    })
    axios.get('/api/visits/' + id)
    .then((response) => {
        setTemperature(response.data.temperature)
        setHeartRate(response.data.heart_rate)
        setBreathRate(response.data.breath_rate)
        setMood(response.data.mood)
        setHistory(response.data.history)
        setDiagnosis(response.data.diagnosis)
        setInstructions(response.data.instructions)
        setNotes(response.data.notes)
        setPrice(response.data.price)
    })
  }, [])



  return (
    <>
    <h2 className='mb-4 text-center text-white'>Rediģēt apmeklējumu</h2>
    <div className='d-flex justify-content-center mb-5'>
    <Form onSubmit={submit} className='w-75'>
      <Row>
        <Col>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId='temperature'>
                <FloatingLabel
                  controlId='temperature'
                  label='Temperatūra'
                  className='text-white'
                  >
                  <Form.Control type='text' placeholder='37' defaultValue={temperature} className='form-outline bg-dark text-white'
                    onChange={(e) => {setTemperature(e.target.value)}}
                  ></Form.Control>
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId='heartRate'>
                <FloatingLabel
                  controlId='heartRate'
                  label='Sirds ritms'
                  className='text-white'
                  >
                  <Form.Control type='text' placeholder='100' defaultValue={heartRate} className='form-outline bg-dark text-white'
                    onChange={(e) => {setHeartRate(e.target.value)}}
                  ></Form.Control>
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId='breathRate'>
                <FloatingLabel
                  controlId='breathRate'
                  label='Elpošanas ritms'
                  className='text-white'
                  >
                  <Form.Control type='text' placeholder='20' defaultValue={breathRate} className='form-outline bg-dark text-white'
                    onChange={(e) => {setBreathRate(e.target.value)}}
                  ></Form.Control>
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
          

      <Form.Group className="mb-3" controlId='mood'>
        <FloatingLabel
          controlId='mood'
          label='Noskaņojums'
          className='text-white'
          >
          <Form.Control type='text' placeholder='Labs' defaultValue={mood} className='form-outline bg-dark text-white'
            onChange={(e) => {setMood(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='history'>
        <FloatingLabel
          controlId='history'
          label='Anamnēze'
          className='text-white'
          >
          <Form.Control as='textarea' type='text' placeholder='Sāpes' defaultValue={history} className='form-outline bg-dark text-white'
            onChange={(e) => {setHistory(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='diagnosis'>
        <FloatingLabel
          controlId='diagnosis'
          label='Diagnoze'
          className='text-white'
          >
          <Form.Control as='textarea' type='text' placeholder='Nāve' defaultValue={diagnosis} className='form-outline bg-dark text-white'
            onChange={(e) => {setDiagnosis(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='instructions'>
        <FloatingLabel
          controlId='instructions'
          label='Instrukcijas saimniekam'
          className='text-white'
          >
          <Form.Control as='textarea' type='text' placeholder='Šprice vienreiz dienā' defaultValue={instructions} className='form-outline bg-dark text-white'
            onChange={(e) => {setInstructions(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='notes'>
        <FloatingLabel
          controlId='notes'
          label='Piezīmes'
          className='text-white'
          >
          <Form.Control as='textarea' type='text' placeholder='Piezīmes' defaultValue={notes} className='form-outline bg-dark text-white'
            onChange={(e) => {setNotes(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      </Col>
      <Col>
      {/* //Manipulāciju dropdown menu */}

      <Form.Group className="mb-3" controlId='sex'>
        <FloatingLabel
          controlId='manipulations'
          label='Manipulācijas'
          onChange={(e) => {setManipulations(manipulations => [...manipulations, e.target.value])
          }}
          className='text-white'
          >
          <Form.Select placeholder='Sterilization' className='form-outline bg-dark text-white'
          >
            <option >Izvēlieties manipulācijas</option>
          { manipulationList.map((value) => {
              return <option key={value.id} value={value.id}>{value.name} - {value.price}</option>
            }) 
          }
          </Form.Select>
        </FloatingLabel>
      </Form.Group>
      <ul>
      {manipulations.map((value) => {
              
              return <li className='mb-2 text-white'>{value.manipulation.name} 
              <Button onClick={() => deleteManipulation(value.id)} variant='outline-danger' size='sm' className='ms-2' title='Dzēst manipulāciju'><i className='bi bi-trash'></i></Button></li> 

            })}

      </ul>



      {/* //Medikamentu dropdown menu */}

      <Form.Group className="mb-3" controlId='sex'>
        <FloatingLabel
          controlId='medicaments'
          label='Medikamenti'
          onChange={(e) => {setMedicaments(medicaments => [...medicaments, e.target.value])
          }}
          className='text-white'
          >
          <Form.Select placeholder='Paracetamol' className='form-outline bg-dark text-white'
          >
            <option >Izvēlaties medikamentus</option>
          { medicamentList.map((value) => {
              return <option key={value.id} value={value.id}>{value.name} - {value.price}</option>
            }) 
          }
          </Form.Select>
        </FloatingLabel>
      </Form.Group>

      <ul>
      {medicaments.map((value) => {
        return <li className='mb-2 text-white'>{value.medicament.name} 
        <Button onClick={() => deleteMedicament(value.id)} variant='outline-danger' size='sm' className='ms-2' title='Dzēst medikamentu'><i className='bi bi-trash'></i></Button></li> 
      })}
      </ul>

      <Form.Group className="mb-3" controlId='price'>
        <FloatingLabel
          controlId='price'
          label='Pakalpojumu cena'
          className='text-white'
          >
          <Form.Control type='text' placeholder='100' defaultValue={price} className='form-outline bg-dark text-white'
            onChange={(e) => {setPrice(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Button type='submit' variant='outline-primary' className='float-end'>Izmainīt</Button>
      <Button className='ms-2 float-end' onClick={() => {navigate(-1)}} variant='outline-secondary'>Atpakaļ</Button></Col>
      </Row>
    </Form>
    </div>


    </>
  )
}

export default EditVisit