import React, { useState, useEffect, useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import { Viewer } from "@grapecity/activereports-react"

import moment from 'moment'


import Grid from '../../components/grids/Grid'


const Visits = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()

  const [rowData, setRowData] = useState()

  moment.locale('lv')
  

  const [columnDefs, setColumnDefs] = useState([
    {headerName: 'Datums un laiks', field: 'created_at',
    cellRenderer: (data) => {
      return moment.utc(data.data.created_at).format('YYYY-MM-DD HH:mm');
    }, width: '205px', resizable: false},
    {headerName: 'Temperatūra', field: 'temperature', width: '160px', resizable: false, sortable: false},
    {headerName: 'Sirds ritms', field: 'heart_rate', width: '160px', resizable: false, sortable: false},
    {headerName: 'Elpošanas ritms', field: 'breath_rate', width: '190px', resizable: false, sortable: false},
    {headerName: 'Noskaņojums', field: 'mood', sortable: false},
    {headerName: 'Anamnēze', field: 'history', sortable: false},
    {headerName: 'Diagnoze', field: 'diagnosis', sortable: false},
    {headerName: 'Norādes', field: 'instructions', sortable: false},
    {headerName: 'Cena', field: 'price', cellRenderer: (data) => {
      return data.data.price + ' €';
    }, width: '115px', resizable: false}
  ])

  const cellClickedListener = useCallback( event => {
    navigate('/visit/' + event.data.id )

  }, []);

  useEffect(() => {
    axios.get('/api/visits').then((response) => {
      setRowData(response.data)
    })
  }, []);

  return (
    <div>
      <div className='mb-2'>
        <h2 className='d-inline text-white'>Apmeklējumi</h2>
        <Button variant="outline-primary" className='d-inline float-end' onClick={handleShow}>
          Sagatavot atskaiti &nbsp;<i className="bi bi-printer"></i>
        </Button>
      </div>
      <Grid rowData={rowData} columnDefs={columnDefs} cellClickedListener={cellClickedListener} />




      <Modal fullscreen={true} show={show} onHide={handleClose}>
        <Modal.Body  className='bg-dark'>
          <Viewer report= {{ Uri: 'income_report.rdlx-json' }} />
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            Aizvērt
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Visits