import axios from 'axios'
import { React, useEffect, useState } from 'react'

import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

const AddVisit = () => {

    const navigate = useNavigate()
    const location = useLocation()

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
    const [price, setPrice] = useState(0.0)

    const [medicaments ,setMedicaments] = useState([])
    const [manipulations ,setManipulations] = useState([])

    const submit = (e) => {
        e.preventDefault()
        axios.post('api/visits', {
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
          }).then((response) => {
            medicaments.forEach(value => {
              axios.post('/api/usedmedicaments', {
                visit_id: response.data.id,
                medicament_id: value
              })
            })
            manipulations.forEach(value => {
              axios.post('/api/usedmanipulations', {
                visit_id: response.data.id,
                manipulation_id: value
              })
            })
            navigate('/visit/' + response.data.id)
          })


        //   .then((response) => {
        //     navigate('/visits/pet/' + response.data.id)
        //   })
        // .then((response) => {
        //     navigate(-1)
        // })
    }

    const addMedicaments = (e) => {
      setMedicaments(medicaments => [...medicaments, e.target.value])
      setPrice(price + parseFloat(medicamentList.find(x => x.id == e.target.value).price))
    }

    const deleteMedicament = (value) => {
      medicaments.splice(medicaments.findIndex(item => item === value), 1)
      setMedicaments(medicaments)
      setPrice(price - parseFloat(medicamentList.find(x => x.id == value).price))
    }

    const addManipulations = (e) => {
      setManipulations(manipulations => [...manipulations, e.target.value])
      setPrice(price + parseFloat(manipulationList.find(x => x.id == e.target.value).price))
    }

    const deleteManipulation = (value) => {
      manipulations.splice(manipulations.findIndex(item => item === value), 1)
      setManipulations(manipulations)
      setPrice(price - parseFloat(manipulationList.find(x => x.id == value).price))
    }

    useEffect(() => {
      axios.get('/api/medicaments').then((response) => {
        setMedicamentList(response.data)
      })
      axios.get('/api/manipulations').then((response) => {
        setManipulationList(response.data)
      })
    }, [])
    

  return (
    <>
    <h2 className='mb-4 text-center text-white'>Pievienot jaunu apmeklējumu</h2>
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
                  <Form.Control type='text' placeholder='37' className='form-outline bg-dark text-white'
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
                  <Form.Control type='text' placeholder='100' className='form-outline bg-dark text-white'
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
                  <Form.Control type='text' placeholder='20' className='form-outline bg-dark text-white'
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
                  <Form.Control type='text' placeholder='Labs' className='form-outline bg-dark text-white'
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
                  <Form.Control as='textarea' type='text' placeholder='Sāpes' className='form-outline bg-dark text-white'
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
                  <Form.Control as='textarea' type='text' placeholder='Nāve' className='form-outline bg-dark text-white'
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
                  <Form.Control as='textarea' type='text' placeholder='Šprice vienreiz dienā' className='form-outline bg-dark text-white'
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
                  <Form.Control as='textarea' type='text' placeholder='Piezīmes' className='form-outline bg-dark text-white'
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
              onChange={(e) => addManipulations(e)}
          className='text-white'
          >
              <Form.Select placeholder='Sterilization' className='form-outline bg-dark text-white' value='default'
              >
                <option value='default' disabled>Izvēlieties manipulācijas</option>
              { manipulationList.map((value) => {
                  return <option key={value.id} value={value.id}>{value.name} - {value.price} €</option>
                }) 
              }
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <ul>
          {manipulations.map((value) => {
            
            return <li className='mb-2 text-white'>{manipulationList.find(x => x.id == value).name} {manipulationList.find(x => x.id == value).price} €
            <Button onClick={() => deleteManipulation(value)} variant='outline-danger' size='sm' className='ms-2' title='Dzēst manipulāciju'><i className='bi bi-trash'></i></Button></li> 

          })}
          </ul>

          {/* //Medikamentu dropdown menu */}

          <Form.Group className="mb-3" controlId='sex'>
            <FloatingLabel
              controlId='medicaments'
              label='Medikamenti'
              onChange={(e) => addMedicaments(e)}
          className='text-white'
          >
              <Form.Select placeholder='Paracetamol' className='form-outline bg-dark text-white' value='default'
              >
                <option value='default' disabled>Izvēlaties medikamentus</option>
              { medicamentList.map((value) => {
                  return <option key={value.id} value={value.id}>{value.name} - {value.price} €</option>
                }) 
              }
              </Form.Select>
            </FloatingLabel>
          </Form.Group>

          <ul>
          {medicaments.map((value) => {
            
            return <li className='mb-2 text-white'>{medicamentList.find(x => x.id == value).name} {medicamentList.find(x => x.id == value).price} €
            <Button onClick={() => deleteMedicament(value)} variant='outline-danger' size='sm' className='ms-2' title='Dzēst medikamentu'><i className='bi bi-trash'></i></Button></li> 

          })}
          </ul>

          <Form.Group className="mb-3" controlId='price'>
            <FloatingLabel
              controlId='price'
              label='Pakalpojumu cena (€)'
          className='text-white'
          >
              <Form.Control type='text' placeholder='100' value={price.toFixed(2)} className='form-outline bg-dark text-white'
                onChange={(e) => {setPrice(e.target.value)}}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Button type='submit' variant='outline-primary' className='float-end ms-2'>Pievienot</Button>
          <Button className='ms-2 float-end' onClick={() => {navigate(-1)}} variant='outline-secondary'>Atpakaļ</Button>
        </Col>
      </Row>





    </Form>
    </div>


    </>
  )
}

export default AddVisit