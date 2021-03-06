import { React, useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, Button, FloatingLabel } from 'react-bootstrap'

import { toast } from 'react-toastify'

const EditManipulation = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const [times, setTimes] = useState(false)

    const onClick = () => {
      if(!times){
        toast.info('Uzspiediet divas reizes, lai izdzēstu', {theme: "colored"})
        setTimes(true)
      }    
    }

    const deleteManipulation = () => {
      axios.delete('/api/manipulations/' + id)
      .then(() => {
        navigate('/manipulations')
        toast.warning('Manipulācija izdzēsta', {theme: "colored"})
      })
    }

    const submit = (e) => {
        e.preventDefault()
        axios.put('/api/manipulations/' + id, {
          name: name,
          price: price,
    
        })
        .then(() => {
          navigate(-1)
          toast.success('Manipulācijas dati rediģēti veiksmīgi', {theme: "colored"})
        })
      }

      useEffect(() => {
        axios.get('/api/manipulations/' + id)
        .then((response) => {
            setName(response.data.name)
            setPrice(response.data.price)
        })
    }, [])

  return (
    <>
    <h2 className='mb-4 text-center text-white'>Rediģēt manipulāciju</h2>
    <div className='d-flex justify-content-center'>
      <Form onSubmit={submit} className="w-50">

        <Form.Group className="mb-3" controlId='name'>
            <FloatingLabel
              controlId='name'
              label='Manipulācijas nosaukums'
          className='text-white'
          >
              <Form.Control type='text' placeholder='Paracetamol' value={name} className='form-outline bg-dark text-white' required
                onChange={(e) => {setName(e.target.value)}}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId='price'>
          <FloatingLabel
            controlId='price'
            label='Manipulācijas cena'
          className='text-white'
          >
            <Form.Control type='text' placeholder='100' value={price} className='form-outline bg-dark text-white' required
              onChange={(e) => {setPrice(parseFloat(e.target.value).toFixed(2))}}
            ></Form.Control>
          </FloatingLabel>
        </Form.Group>
        <Button type='submit' variant='outline-primary' className='float-end ms-2'>Izmainīt</Button>
        <Button variant='outline-danger' className='float-end ms-2'  onClick={onClick} onDoubleClick={deleteManipulation}>Izdzēst</Button>
        <Button className='ms-2 float-end' onClick={() => {navigate(-1)}} variant='outline-secondary'>Atpakaļ</Button>

      </Form>
    </div>
  </>
  )
}

export default EditManipulation