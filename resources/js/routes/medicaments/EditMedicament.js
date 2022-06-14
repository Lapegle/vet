import {React, useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, Button, FloatingLabel } from 'react-bootstrap'

import { toast } from 'react-toastify'

const EditMedicament = () => {

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

    const deleteMedicament = () => {
      axios.delete('/api/medicaments/' + id)
      .then(() => {
        navigate('/medicaments')
        toast.warning('Medikaments izdzēsts', {theme: "colored"})
      })
    }

    const submit = (e) => {
        e.preventDefault()
        axios.put('/api/medicaments/' + id, {
          name: name,
          price: price,
    
        })
        .then(() => {
          navigate('/medicaments')
          toast.success('Medikamenta dati rediģēti veiksmīgi', {theme: "colored"})
        })
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
    <h2 className='mb-4 text-center text-white'>Rediģēt medikamentu</h2>
    <div className='d-flex justify-content-center'>
      <Form onSubmit={submit} className="w-50">

        <Form.Group className="mb-3" controlId='name'>
            <FloatingLabel
              controlId='name'
              label='Medikamenta nosaukums'
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
            label='Medikamenta cena'
          className='text-white'
          >
            <Form.Control type='text' placeholder='100' value={price} className='form-outline bg-dark text-white' required
              onChange={(e) => {setPrice(parseFloat(e.target.value).toFixed(2))}}
            ></Form.Control>
          </FloatingLabel>
        </Form.Group>
        <Button type='submit' variant='outline-primary' className='float-end ms-2'>Izmainīt</Button>
        <Button variant='outline-danger' className='float-end ms-2'  onClick={onClick} onDoubleClick={deleteMedicament}>Izdzēst</Button>
        <Button className='ms-2 float-end' onClick={() => {navigate(-1)}} variant='outline-secondary'>Atpakaļ</Button>

      </Form>
    </div>
  </>
  )
}

export default EditMedicament