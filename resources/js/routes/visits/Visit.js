import { useState, useEffect} from 'react'
import moment from 'moment'

import { useNavigate, useParams } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap';


const Visit = () => {

  const { id } = useParams();
  const navigate = useNavigate()


  const axios = require('axios').default
  
  const [visit, setVisit] = useState({})
  const [pet, setPet] = useState({})
  const [usedManipulations, setUsedManipulations] = useState([])
  const [usedMedicaments, setUsedMedicaments] = useState([])

  const deleteVisit = () => {
    axios.delete('http://localhost:8000/api/visits/' + id)
    .then(navigate(-1))
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/visits/' + id ).then((response)=>{
        setVisit(response.data)
        axios.get('http://localhost:8000/api/pets/' + response.data.pet_id).then((response)=> {
          setPet(response.data)
      })
    axios.get('http://localhost:8000/api/usedmanipulations/' + id).then((response) => {
      setUsedManipulations(response.data)
    })  
    axios.get('http://localhost:8000/api/usedmedicaments/' + id).then((response) => {
      setUsedMedicaments(response.data)
    })  
    })

  }, [])


  return (
    <Row>
      <Col>
        <h3 className='mb-3'><strong>{pet.name}</strong> apmeklējums { moment.utc(visit.created_at).format('YYYY-MM-DD HH:mm') }</h3>
        <p className='fs-5'><b>Temperatūra:</b> {visit.temperature}</p>
        <p className='fs-5'><b>Sirds ritms:</b> {visit.heart_rate}</p>
        <p className='fs-5'><b>Elpošanas ritms:</b> {visit.breath_rate}</p>
        <p className='fs-5'><b>Anamnēze:</b> {visit.history}</p>
        <p className='fs-5'><b>Diagnoze:</b> {visit.diagnosis}</p>
        <p className='fs-5'><b>Norādes:</b> {visit.instructions}</p>


        <p className='fs-5'><b>Kopēja cena:</b> {visit.price} €</p>
      </Col>
      <Col className='text-right'>
          <Button variant='outline-primary' className='float-end ms-2' title='Rediģēt klienta datus' onClick={() => navigate('/visit/edit/' + id)}><i className="bi bi-pencil"></i></Button>
          <Button variant='outline-danger' className='float-end ms-2' title='Dzēst apmeklējumu' onClick={deleteVisit} ><i className='bi bi-trash'></i></Button>
          <p className='fs-5 mt-5'><b>Izmantotie medikamenti:</b></p>
        <ul>
        { usedMedicaments.map(( value ) => {
          return <li>{value.medicament.name} - {value.medicament.price} €</li>
        })}
        </ul>
        <p className='fs-5'><b>Veiktās manipulācijas:</b></p>
        <ul>
        { usedManipulations.map(( value ) => {
          return <li>{value.manipulation.name} - {value.manipulation.price} €</li>
        })}
        </ul>
      </Col>
    </Row>
  )
}

export default Visit