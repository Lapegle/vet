import Grid from '../../components/grids/Grid'
import { useNavigate } from 'react-router-dom'
import { React, useState, useEffect, useCallback } from 'react'
import { Col, Row, Button } from 'react-bootstrap'

const Manipulations = () => {

    const navigate = useNavigate()

    const [rowData, setRowData] = useState()

    const [columnDefs, setColumnDefs] = useState([
        {headerName: 'Nosaukums', field: 'name', width: 600, filter: true },
        {headerName: 'Cena', field: 'price', cellRenderer: (data) => {
            return data.data.price + ' €'
        }}
      ])


    const cellClickedListener = useCallback( event => {
        navigate('/manipulations/edit/' + event.data.id )
      }, []);

    useEffect(() => {
        axios.get(window.url + '/manipulations').then((response) => {
            setRowData(response.data)
        })
    }, [])

  return (
    <>
        <Row>
            <Col>
                <h2>Manipulācijas</h2>
            </Col>
            <Col>
                <Button variant='outline-primary' className='float-end ms-3' title='Pievienot jaunu manipulāciju' onClick={() => navigate('/manipulations/create')}><i className="bi bi-plus-lg"></i></Button>
            </Col>
        </Row>
        <Row>
            <Grid rowData={rowData} columnDefs={columnDefs} cellClickedListener={cellClickedListener} />
        </Row>
    </>
  )
}

export default Manipulations