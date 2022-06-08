import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import Grid from '../../components/grids/Grid'

const Pets = () => {

  const navigate = useNavigate()

  const [rowData, setRowData] = useState()

  const [columnDefs, setColumnDefs] = useState([
    {headerName: 'Vārds', field: 'name', filter: true},
    {headerName: 'Dzimšanas datums', field: 'birth_date'},
    {headerName: 'Dzimums', field: 'sex'},
    {headerName: 'Suga', field: 'species'},
    {headerName: 'Šķirne', field: 'breed'},
    {headerName: 'Krāsa', field: 'colour'},
    {headerName: 'Čipa numurs', field: 'microchip', filter: true}
  ])

  const cellClickedListener = useCallback( event => {
    navigate('/visits/pet/' + event.data.id )
  }, []);

  useEffect(() => {
    axios.get('/api/pets').then((response) => {
      setRowData(response.data)
    })
  }, []);

  return (
    <div>
      <h2 className='text-white'>Dzīvnieki</h2>
      <Grid rowData={rowData} columnDefs={columnDefs} cellClickedListener={cellClickedListener} />
    </div>
  )
}

export default Pets