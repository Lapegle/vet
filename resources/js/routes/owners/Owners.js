import React from 'react'

import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import OwnerGrid from '../../components/grids/OwnerGrid'



const Owners = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div className='mb-2'>
        <h2 className='d-inline'>Klienti</h2>
        <Button variant='primary' className='d-inline float-end' onClick={() => navigate('/owners/create')}>Jauns klients</Button>
      </div>
      <OwnerGrid /> 
    </div>
  )
}

export default Owners