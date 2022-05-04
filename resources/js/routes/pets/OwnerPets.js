import { Axios } from 'axios';
import { React, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap'

import OwnerPetsGrid from '../../components/grids/OwnerPetsGrid';

const OwnerPets = () => {

    const { id } = useParams();

    const axios = require('axios').default

    const [owner, setOwner] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/owners/' + id ).then((response)=>{
            setOwner(response.data)
        })
    
    }, [])

  return (
    <div>
      <div className='mb-2'>
        <h2 className='d-inline'><strong>{owner.name}</strong> dzīvnieki</h2>
        <Button variant='primary' className='d-inline float-end' onClick={() => navigate('/owners/create')}>Rediģēt klienta datus</Button>
      </div>
        <OwnerPetsGrid id={id}/>

    </div>
  )
}

export default OwnerPets