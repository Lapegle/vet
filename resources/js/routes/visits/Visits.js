import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Viewer } from "@grapecity/activereports-react"

import VisitsGrid from '../../components/grids/VisitsGrid'


const Visits = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='mb-2'>
        <h2 className='d-inline'>Apmeklējumi</h2>
        <Button variant="primary" className='d-inline float-end' onClick={handleShow}>
          Sagatavot atskaiti &nbsp;<i className="bi bi-printer"></i>
        </Button>
      </div>
      <VisitsGrid />



      <Modal fullscreen={true} show={show} onHide={handleClose}>
        <Modal.Body>
          <Viewer report= {{ Uri: 'income_report.rdlx-json' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Aizvērt
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Visits