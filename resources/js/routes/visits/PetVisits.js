import { React, useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from "react-router-dom";

import Grid from '../../components/grids/Grid'
import moment from 'moment'


import { Button, Col, Row, Card } from 'react-bootstrap'


const PetVisits = () => {

  moment.locale('lv')

  const { id } = useParams()

  const navigate = useNavigate()

  const axios = require('axios').default

  const [pet, setPet] = useState({})
  const [owner, setOwner] = useState({})
  const [rowData, setRowData] = useState()


  const deletePet= () => {
    axios.delete('http://localhost:8000/api/pets/' + id)
    .then(navigate(-1))
  }

  const [columnDefs, setColumnDefs] = useState([
    {headerName: 'Datums un laiks', field: 'created_at',
    cellRenderer: (data) => {
      return moment.utc(data.data.created_at).format('YYYY-MM-DD HH:mm');
    }, width: 205, resizable: false},
    {headerName: 'Anamnēze', field: 'history', sortable: false},
    {headerName: 'Diagnoze', field: 'diagnosis', sortable: false},
    {headerName: 'Norādes', field: 'instructions', sortable: false},
    {headerName: 'Cena', field: 'price', cellRenderer: (data) => {
      return data.data.price + ' €';
    }, width: 115, resizable: false}
  ])

    const cellClickedListener = useCallback( event => {
      navigate('/visit/' + event.data.id )
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id ).then((response)=>{
            setPet(response.data)
            axios.get('http://localhost:8000/api/owners/' + response.data.owner_id).then((response) => {
              setOwner(response.data)
            })
        })
        axios.get('http://localhost:8000/api/pet/' + id).then((response) => {
          setRowData(response.data)
        })
    
    }, [])


  return (
    <>
      <Row>
        <Col className='mb-2'>
          <h2>&nbsp;</h2>
        </Col>
        <Col className='text-right'>
          <Button variant='outline-primary' className='float-end ms-3' title='Pievienot jaunu apmeklējumu' onClick={() => navigate('/visits/create', {state: {pet: id}})}><i className="bi bi-plus-lg"></i></Button>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <Card className='shadow' style={{height: '600px'}}>
            <Card.Body>
              <Card.Title><p className='fs-3'><strong>{pet.name}</strong>
                <Button variant='outline-primary' className='float-end ms-2' title='Rediģēt dzīvnieka datus' onClick={() => navigate('/pets/edit/' + id)}><i className="bi bi-pencil"></i></Button>
                <Button variant='outline-danger' className='float-end ms-2' title='Dzēst dzīvnieku' onClick={deletePet}><i className='bi bi-trash'></i></Button>
              </p></Card.Title>
              <Card.Text>
                <p>Suga: { pet.species } <br/>
                   Dzimums: { pet.sex } <br/>
                   Šķirne: { pet.breed } <br/>
                   Krāsa: { pet.colour } <br/>
                   Čips: { pet.microchip }</p>
                <p>Saimnieks: { owner.name } <br/>
                   Telefons: { owner.phone }</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Grid rowData={rowData} columnDefs={columnDefs} cellClickedListener={cellClickedListener} />
        </Col>
      </Row>
    </>

  )
}

export default PetVisits