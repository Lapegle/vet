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
        <Button variant='outline-primary' className='d-inline float-end' title='Pievienot jaunu klientu'
         onClick={() => navigate('/owners/create')}><i className="bi bi-plus-lg"></i></Button>
      </div>
      <OwnerGrid /> 
    </div>
  )
}

export default Owners