import { React, useState, useEffect } from 'react'

import { AgChartsReact } from 'ag-charts-react';
import { Card, Col, Row } from 'react-bootstrap';


const Home = () => {

  const [visitData, setVisitData] = useState([])
  const [petData, setPetData] = useState([])
  const [clientData, setClientData] = useState([])
  const [popularManipulations, setPopularManipulations] = useState([])



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
    theme: 'ag-vivid-dark'
  }

  const petOptions = {
    theme: 'ag-vivid-dark',
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

  const clientOptions = {
    title: {
      text: 'Jauno klientu skaits pēdējās 7 dienās',
    },
    data: clientData,
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
    theme: 'ag-vivid-dark'
  }

  useEffect(() => {
    axios.get('/api/dailyvisits').then((response) => {
      setVisitData(response.data)
    })

    axios.get('/api/allpets').then((response) => {
      setPetData(response.data)
    })
    axios.get('/api/newclients').then((response) => {
      setClientData(response.data)
    })
    axios.get('/api/popularmanipulations').then((response) => {
      setPopularManipulations(response.data)
    })
  }, [])

  return (
    <>
      <Row className='mt-5'>
        <Col lg={7}>
          <Card style={{ width: '100%'}} className='shadow bg-dark border border-secondary'>
            <Card.Body>
              <AgChartsReact options={visitOptions} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5}>
          <Card style={{ width: '100%'}} className='shadow bg-dark border border-secondary'>
            <Card.Body>
              <AgChartsReact options={petOptions} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col lg={5}>
          <Card style={{ width: '100%', height: '100%'}} className='shadow bg-dark border border-secondary'>
            <Card.Body className='text-white'>
              <h3 className='mb-3 text-center'>Populārākie pakalpojumi</h3>
              <ol>
                { popularManipulations.map((value) => {
                  return <li key={value.name} className='mt-2'> {value.name} - {value.count}</li>
                }) }
              </ol>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={7}>
          <Card style={{ width: '100%'}} className='shadow bg-dark border border-secondary'>
            <Card.Body>
              <AgChartsReact options={clientOptions} />
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </>
  )
}

export default Home