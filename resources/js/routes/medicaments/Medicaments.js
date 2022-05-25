import Grid from '../../components/grids/Grid'
import { useNavigate } from 'react-router-dom'
import { React, useState, useEffect, useCallback } from 'react'
import { Col, Row, Button } from 'react-bootstrap'

const Medicaments = () => {

    const navigate = useNavigate()

    const [rowData, setRowData] = useState()

    const [columnDefs, setColumnDefs] = useState([
        {headerName: 'Nosaukums', field: 'name', width: 600, filter: true },
        {headerName: 'Cena', field: 'price', cellRenderer: (data) => {
            return data.data.price + ' €'
        }}
      ])

    const axios = require('axios').default

    const cellClickedListener = useCallback( event => {
        navigate('/medicaments/edit/' + event.data.id )
      }, []);

    useEffect(() => {
        axios.get('http://localhost:8000/api/medicaments').then((response) => {
            setRowData(response.data)
        })
    }, [])

  return (
    <>
        <Row>
            <Col>
                <h2>Medikamenti</h2>
            </Col>
            <Col>
                <Button variant='outline-primary' className='float-end ms-3' title='Pievienot jaunu medikamentu' onClick={() => navigate('/medicaments/create')}><i className="bi bi-plus-lg"></i></Button>
            </Col>
        </Row>
        <Row>
            <Grid rowData={rowData} columnDefs={columnDefs} cellClickedListener={cellClickedListener} />
        </Row>
    </>
  )
}

export default Medicaments