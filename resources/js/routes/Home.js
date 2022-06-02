import { React, useState, useEffect } from 'react'

import { AgChartsReact } from 'ag-charts-react';
import { Card, Col, Row, Button, Modal } from 'react-bootstrap';

import { Viewer } from "@grapecity/activereports-react"

const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [visitData, setVisitData] = useState([])
  const [petData, setPetData] = useState([])

  const axios = require('axios').default

  useEffect(() => {
    axios.get('http://localhost:8000/api/dailyvisits').then((response) => {
      setVisitData(response.data)
    })
    axios.get('http://localhost:8000/api/allpets').then((response) => {
      setPetData(response.data)
    })
  }, [])

  const visitOptions = {
    title: {
      text: 'Apmeklējumu dinamika pēdējo 7 dienu laikā',
    },
    data: visitData,
    series: [
      {
        type: 'column',
        xKey: 'date',
        yKey: 'count',
        shadow: {
          xOffset: 3,
        },
        showInLegend: false,
      }
    ],
    theme: 'ag-material'
  }

  const petOptions = {
    title: {
      text: 'Kopējais dzīvnieku skaits',
    },
    data: petData,
    series: [
      {
        type: 'pie',
        labelKey: 'species',
        angleKey: 'count',
        shadow: {
          xOffset: 3,
        },
        innerRadiusOffset: -50,
      }
    ],
  }

  return (
    <>
      <Row className='mt-5'>
        <Col lg={7}>
          <Card style={{ width: '100%'}} className='shadow'>
            <Card.Body>
              <AgChartsReact options={visitOptions} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5}>
          <Card style={{ width: '100%'}} className='shadow'>
            <Card.Body>
              <AgChartsReact options={petOptions} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Button variant="primary" onClick={handleShow}>
        Sagatavot atskaiti
      </Button>

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
    </>
  )
}

export default Home