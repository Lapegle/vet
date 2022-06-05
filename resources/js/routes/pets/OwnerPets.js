import { React, useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { Button, Col, Row } from 'react-bootstrap'

import OwnerPetsGrid from '../../components/grids/OwnerPetsGrid';

const OwnerPets = () => {

    const navigate = useNavigate()

    const { id } = useParams();

    const [owner, setOwner] = useState({})

    const deleteOwner = () => {
      axios.delete('http://localhost:8000/api/owners/' + id)
      .then(navigate('/owners'))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/owners/' + id ).then((response)=>{
            setOwner(response.data)
        })
    
    }, [])

  return (
    <>
      <Row>
        <Col className='mb-2'>
          <h2 className='d-inline'><strong>{owner.name}</strong> dzīvnieki</h2>

        </Col>
        <Col className='text-right'>
          <Button variant='outline-primary' className='float-end ms-3' title='Pievienot jaunu dzīvnieku' onClick={() => navigate('/pets/create', {state: {owner: id}})}><i className="bi bi-plus-lg"></i></Button>
          <Button variant='outline-primary' className='float-end ms-2' title='Rediģēt klienta datus' onClick={() => navigate('/owners/edit/' + id)}><i className="bi bi-pencil"></i></Button>
          <Button variant='outline-danger' className='float-end ms-2' title='Dzēst klientu' onClick={deleteOwner}><i className='bi bi-trash'></i></Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <OwnerPetsGrid id={id}/>
        </Col>
      </Row>
    </>
  )
}

export default OwnerPets