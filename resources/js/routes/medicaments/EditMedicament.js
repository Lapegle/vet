import {React, useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, Button, FloatingLabel } from 'react-bootstrap'


const EditMedicament = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const submit = (e) => {
        e.preventDefault()
        axios.put('/api/medicaments/' + id, {
          name: name,
          price: price,
    
        })
        .then(() => {navigate(-1)})
      }

      useEffect(() => {
        axios.get('/api/medicaments/' + id)
        .then((response) => {
            setName(response.data.name)
            setPrice(response.data.price)
        })
    }, [])

  return (
    <>
    <h2 className='mb-4 text-center'>Rediģēt medikamentu</h2>
    <div className='d-flex justify-content-center'>
      <Form onSubmit={submit} className="w-50">

        <Form.Group className="mb-3" controlId='name'>
            <FloatingLabel
              controlId='name'
              label='Medikamenta nosaukums'
              >
              <Form.Control type='text' placeholder='Paracetamol' value={name}
                onChange={(e) => {setName(e.target.value)}}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId='price'>
          <FloatingLabel
            controlId='price'
            label='Medikamenta cena'
            >
            <Form.Control type='text' placeholder='100' value={price}
              onChange={(e) => {setPrice(e.target.value)}}
            ></Form.Control>
          </FloatingLabel>
        </Form.Group>
        <Button type='submit' variant='outline-primary'>Izmainīt</Button>
        <Button className='ms-2' onClick={() => {navigate(-1)}} variant='outline-secondary'>Atpakaļ</Button>

      </Form>
    </div>
  </>
  )
}

export default EditMedicament