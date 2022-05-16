import { React, useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";

import PetVisitsGrid from '../../components/grids/PetVisitsGrid';

import { Button, Col, Row } from 'react-bootstrap'


const PetVisits = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const axios = require('axios').default

  const [pet, setPet] = useState({})

  const deletePet= () => {
    axios.delete('http://localhost:8000/api/pets/' + id)
    .then(navigate(-1))
  }

  useEffect(() => {
      axios.get('http://localhost:8000/api/pets/' + id ).then((response)=>{
          setPet(response.data)
      })
  
  }, [])

  return (
    <>
      <Row>
        <Col className='mb-2'>
          <h2 className='d-inline'><strong>{pet.name}</strong> apmeklējumi</h2>
        </Col>
        <Col className='text-right'>
          <Button variant='outline-primary' className='float-end ms-3' title='Pievienot jaunu apmeklējumu' onClick={() => navigate('/visits/create', {state: {pet: id}})}><i className="bi bi-plus-lg"></i></Button>
          <Button variant='outline-primary' className='float-end ms-2' title='Rediģēt dzīvnieka datus' onClick={() => navigate('/pets/edit/' + id)}><i className="bi bi-pencil"></i></Button>
          <Button variant='outline-danger' className='float-end ms-2' title='Dzēst dzīvnieku' onClick={deletePet}><i className='bi bi-trash'></i></Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <PetVisitsGrid id={id} />
        </Col>
      </Row>
    </>

  )
}

export default PetVisits