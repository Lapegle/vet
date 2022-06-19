import { React, useState, useEffect, useMemo, useCallback } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { Button, Col, Row } from 'react-bootstrap'

import { toast } from 'react-toastify'

import Grid from '../../components/grids/Grid';

const OwnerPets = () => {

    const navigate = useNavigate()

    const { id } = useParams();

    const [owner, setOwner] = useState({})
    const [times, setTimes] = useState(false)

    const onClick = () => {
      if(!times){
        toast.info('Uzspiediet divas reizes, lai izdzēstu', {theme: "colored"})
        setTimes(true)
      }    
    }

    const deleteOwner = () => {
      axios.delete('/api/owners/' + id)
      .then((response) => {
        navigate('/owners')
        toast.warn('Klients izdzēsts', {theme: "colored"})
      })
    }

    const [rowData, setRowData] = useState()
    
  
    const [columnDefs, setColumnDefs] = useState([
      {headerName: 'Vārds', field: 'name', filter: true},
      {headerName: 'Dzimšanas datums', field: 'birth_date', filter: true},
      {headerName: 'Dzimums', field: 'sex', filter: true},
      {headerName: 'Suga', field: 'species', filter: true},
      {headerName: 'Šķirne', field: 'breed', filter: true},
      {headerName: 'Krāsa', field: 'colour', filter: true},
      {headerName: 'Čipa numurs', field: 'microchip', filter: true}
    ])
  
    const cellClickedListener = useCallback( event => {
      navigate('/visits/pet/' + event.data.id )
    }, []);
  
    useEffect(() => {
      axios.get('/api/owners/' + id ).then((response)=>{
        setOwner(response.data)
    })
      axios.get('/api/owner/' + id).then((response) => {
        setRowData(response.data)
      })

    }, []);


  return (
    <>
      <Row>
        <Col className='mb-2'>
          <h2 className='d-inline text-white'><strong>{owner.name}</strong> dzīvnieki</h2>
        </Col>
        <Col className='text-right'>
          <Button variant='outline-primary' className='float-end ms-3' title='Pievienot jaunu dzīvnieku' onClick={() => navigate('/pets/create', {state: {owner: id}})}><i className="bi bi-plus-lg"></i></Button>
          <Button variant='outline-primary' className='float-end ms-2' title='Rediģēt klienta datus' onClick={() => navigate('/owners/edit/' + id)}><i className="bi bi-pencil"></i></Button>
          <Button variant='outline-danger' className='float-end ms-2' title='Dzēst klientu' onClick={onClick} onDoubleClick={deleteOwner}><i className='bi bi-trash'></i></Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Grid rowData={rowData} columnDefs={columnDefs} cellClickedListener={cellClickedListener} />
        </Col>
      </Row>
    </>
  )
}

export default OwnerPets