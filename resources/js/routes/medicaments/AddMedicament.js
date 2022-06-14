import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, FloatingLabel } from 'react-bootstrap'

import { toast } from 'react-toastify'

const AddMedicament = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const submit = (e) => {
    e.preventDefault()
    axios.post('/api/medicaments', {
      name: name,
      price: price,

    })
    .then(() => {
      navigate('/medicaments')
      toast.success('Jauns medikaments pievienots veiksmīgi', {theme: "colored"})
    })
  }

  return (
    <>
      <h2 className='mb-4 text-center text-white'>Pievienot jaunu medikamentu</h2>
      <div className='d-flex justify-content-center'>
        <Form onSubmit={submit} className="w-50">

          <Form.Group className="mb-3" controlId='name'>
              <FloatingLabel
                controlId='name'
                label='Medikamenta nosaukums'
          className='text-white'
          >
                <Form.Control type='text' placeholder='Paracetamol' className='form-outline bg-dark text-white' required
                  onChange={(e) => {setName(e.target.value)}}
                ></Form.Control>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId='price'>
            <FloatingLabel
              controlId='price'
              label='Medikamenta cena'
          className='text-white'
          >
              <Form.Control type='text' placeholder='100' className='form-outline bg-dark text-white' required
                onChange={(e) => {setPrice(parseFloat(e.target.value).toFixed(2))}}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Button type='submit' variant='outline-primary' className='float-end ms-2'>Pievienot</Button>
          <Button className='ms-2 float-end' onClick={() => {navigate(-1)}} variant='outline-secondary'>Atpakaļ</Button>

        </Form>
      </div>
    </>
  )
}

export default AddMedicament