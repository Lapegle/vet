import axios from 'axios'
import { React, useEffect, useState } from 'react'

import { Button, FloatingLabel, Form } from 'react-bootstrap'
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
    axios.put('http://localhost:8000/api/visits/' + id, {
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
      //     axios.post('http://localhost:8000/api/usedmedicaments', {
      //       visit_id: response.data.id,
      //       medicament_id: value
      //     })
      //   })
      //   manipulations.forEach(value => {
      //     axios.post('http://localhost:8000/api/usedmanipulations', {
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
    axios.get('http://localhost:8000/api/medicaments').then((response) => {
      setMedicamentList(response.data)
    })
    axios.get('http://localhost:8000/api/manipulations').then((response) => {
      setManipulationList(response.data)
    })
    axios.get('http://localhost:8000/api/usedmedicaments/' + id).then((response) => {
      console.log(response.data)
      setMedicaments(response.data)
    })
    // axios.get('http://localhost:8000/api/usedmanipulations/' + id).then((response) => {
    //   console.log(response.data)

    //   setManipulations(response.data)
    // })
    axios.get('http://localhost:8000/api/visits/' + id)
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
    <h2 className='mb-4 text-center'>Rediģēt apmeklējumu</h2>
    <div className='d-flex justify-content-center mb-5'>
    <Form onSubmit={submit} className='w-50'>
      <Form.Group className="mb-3" controlId='temperature'>
        <FloatingLabel
          controlId='temperature'
          label='Temperatūra'
          >
          <Form.Control type='text' placeholder='37' defaultValue={temperature}
            onChange={(e) => {setTemperature(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='heartRate'>
        <FloatingLabel
          controlId='heartRate'
          label='Sirds ritms'
          >
          <Form.Control type='text' placeholder='100' defaultValue={heartRate}
            onChange={(e) => {setHeartRate(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='breathRate'>
        <FloatingLabel
          controlId='breathRate'
          label='Elpošanas ritms'
          >
          <Form.Control type='text' placeholder='20' defaultValue={breathRate}
            onChange={(e) => {setBreathRate(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='mood'>
        <FloatingLabel
          controlId='mood'
          label='Noskaņojums'
          >
          <Form.Control type='text' placeholder='Labs' defaultValue={mood}
            onChange={(e) => {setMood(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='history'>
        <FloatingLabel
          controlId='history'
          label='Anamnēze'
          >
          <Form.Control as='textarea' type='text' placeholder='Sāpes' defaultValue={history}
            onChange={(e) => {setHistory(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='diagnosis'>
        <FloatingLabel
          controlId='diagnosis'
          label='Diagnoze'
          >
          <Form.Control as='textarea' type='text' placeholder='Nāve' defaultValue={diagnosis}
            onChange={(e) => {setDiagnosis(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='instructions'>
        <FloatingLabel
          controlId='instructions'
          label='Instrukcijas saimniekam'
          >
          <Form.Control as='textarea' type='text' placeholder='Šprice vienreiz dienā' defaultValue={instructions}
            onChange={(e) => {setInstructions(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId='notes'>
        <FloatingLabel
          controlId='notes'
          label='Piezīmes'
          >
          <Form.Control as='textarea' type='text' placeholder='Piezīmes' defaultValue={notes}
            onChange={(e) => {setNotes(e.target.value)}}
          ></Form.Control>
        </FloatingLabel>
      </Form.Group>


      {/* //Manipulāciju dropdown menu */}

      <Form.Group className="mb-3" controlId='sex'>
        <FloatingLabel
          controlId='manipulations'
          label='Manipulācijas'
          onChange={(e) => {setManipulations(manipulations => [...manipulations, e.target.value])
          }}
          >
          <Form.Select placeholder='Sterilization'
          >
            <option >Izvēlieties manipulācijas</option>
          { manipulationList.map((value) => {
              return <option key={value.id} value={value.id}>{value.name} - {value.price}</option>
            }) 
          }
          </Form.Select>
        </FloatingLabel>
      </Form.Group>

      {manipulations.map((value) => {
        
        return <p>{value} 
        <Button onClick={() => deleteManipulation(value)} variant='outline-danger' size='sm' className='ms-2' title='Dzēst manipulāciju'><i className='bi bi-trash'></i></Button></p> 

      })}


      {/* //Medikamentu dropdown menu */}

      <Form.Group className="mb-3" controlId='sex'>
        <FloatingLabel
          controlId='medicaments'
          label='Medikamenti'
          onChange={(e) => {setMedicaments(medicaments => [...medicaments, e.target.value])
          }}
          >
          <Form.Select placeholder='Paracetamol'
          >
            <option >Izvēlaties medikamentus</option>
          { medicamentList.map((value) => {
              return <option key={value.id} value={value.id}>{value.name} - {value.price}</option>
            }) 
          }
          </Form.Select>
        </FloatingLabel>
      </Form.Group>

      {medicaments.map((value) => {
        
        return <p>{value.medicament.name} 
        <Button onClick={() => deleteMedicament(value.id)} variant='outline-danger' size='sm' className='ms-2' title='Dzēst medikamentu'><i className='bi bi-trash'></i></Button></p> 

      })}

      <Form.Group className="mb-3" controlId='price'>
        <FloatingLabel
          controlId='price'
          label='Pakalpojumu cena'
          >
          <Form.Control type='text' placeholder='100' defaultValue={price}
            onChange={(e) => {setPrice(e.target.value)}}
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

export default EditVisit