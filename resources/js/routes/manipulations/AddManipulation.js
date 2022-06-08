import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, FloatingLabel } from 'react-bootstrap'

const AddManipulation = () => {


  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const submit = (e) => {
    e.preventDefault()
    axios.post('/api/manipulations', {
      name: name,
      price: price,

    })
    .then(() => {navigate(-1)})
  }

  return (
    <>
      <h2 className='mb-4 text-center'>Pievienot jaunu manipulāciju</h2>
      <div className='d-flex justify-content-center'>
        <Form onSubmit={submit} className="w-50">

          <Form.Group className="mb-3" controlId='name'>
              <FloatingLabel
                controlId='name'
                label='Manipulācijas nosaukums'
                >
                <Form.Control type='text' placeholder='Sterilizācija'
                  onChange={(e) => {setName(e.target.value)}}
                ></Form.Control>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId='price'>
            <FloatingLabel
              controlId='price'
              label='Manipulācijas cena'
              >
              <Form.Control type='text' placeholder='100'
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

export default AddManipulation