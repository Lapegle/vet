import React, { useState, useEffect, useCallback } from 'react'

import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import Grid from '../../components/grids/Grid'
import axios from 'axios'



const Owners = () => {

  
  const navigate = useNavigate();

  const [rowData, setRowData] = useState()
  

  const [columnDefs, setColumnDefs] = useState([
    {headerName: 'Vārds un uzvārds', field: 'name', filter: true},
    {headerName: 'Adrese', field: 'address'},
    {headerName: 'Telefona numurs', field: 'phone', filter: true}
  ])

  const cellClickedListener = useCallback( event => {
    navigate('/pets/owner/' + event.data.id )
  }, []);

  useEffect(() => {
    axios.get('/api/owners').then((response) => {
      setRowData(response.data)
    })
  }, []);

  return (
    <div>
      <div className='mb-2'>
        <h2 className='d-inline text-white'>Klienti</h2>
        <Button variant='outline-primary' className='d-inline float-end' title='Pievienot jaunu klientu'
         onClick={() => navigate('/owners/create')}><i className="bi bi-plus-lg"></i></Button>
      </div>
        <Grid rowData={rowData} columnDefs={columnDefs} cellClickedListener={cellClickedListener} />
    </div>
  )
}

export default Owners