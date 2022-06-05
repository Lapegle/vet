import { useState, useEffect, useRef} from 'react'
import moment from 'moment'

import ReactToPrint from 'react-to-print';

import { useNavigate, useParams } from 'react-router-dom'
import { Row, Col, Button, Modal } from 'react-bootstrap';


const Visit = () => {

  const { id } = useParams();
  const navigate = useNavigate()
  const componentRef = useRef();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [visit, setVisit] = useState({})
  const [pet, setPet] = useState({})
  const [owner, setOwner] = useState({})
  const [usedManipulations, setUsedManipulations] = useState([])
  const [usedMedicaments, setUsedMedicaments] = useState([])

  var today = new Date()
  var now = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear()


  const deleteVisit = () => {
    axios.delete('http://localhost:8000/api/visits/' + id)
    .then(navigate(-1))
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/visits/' + id ).then((response)=>{
        setVisit(response.data)
        axios.get('http://localhost:8000/api/pets/' + response.data.pet_id).then((response)=> {
          setPet(response.data)
          axios.get('http://localhost:8000/api/owners/' + response.data.owner_id).then((response) => {
            setOwner(response.data)
          })
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
    <>
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
          <Button className='float-end ms-2' onClick={handleShow} variant='outline-secondary'>Izveidot ķirurģisko pieprasījumu &nbsp;<i className='bi bi-printer'></i></Button>
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

          <Modal
          show={show}
          onHide={handleClose}
          size='xl'
          >
            <Modal.Header closeButton>
              <Modal.Title>Printēt ķirurģisko pieprasījumu</Modal.Title>
            </Modal.Header>
            <Modal.Body ref={componentRef}>
              <div className='border p-5'>
                <h2 className='text-center mb-4'>Ķirurģiskais pieprasījums</h2>
                <p>Vārds: { pet.name } <br/>
                Suga: { pet.species } <br/>
                Šķirne: { pet.breed } <br/>
                Dzimums: { pet.sex } <br/>
                Dzimšanas datums: { pet.birth_date }</p>

                <p>Saimnieks: { owner.name } <br/> T: { owner.phone }</p>
                <p className='mb-5'>Adrese: _____________________________ <br/>
                _____________________________________ <br/>
                _____________________________________ </p>

                <hr/>

                    <p className='mt-5'>Veicamās manipulācijas:</p>
                    <ul>
                      { usedManipulations.map(( value ) => {
                        return <li>{value.manipulation.name}</li>
                      })}
                    </ul>

                <p className='mt-5'>Saimnieks ir informēts par narkozes bīstamību un šādiem riskus pastiprinošiem faktoriem:</p>
                <textarea placeholder='Rakstīt šeit' cols={125} rows={6} style={{ border: 'none', outline: 'none', maxWidth: '100%'}}></textarea>
                
                <p className='mt-3'>Datums: { now }</p>
                <p className='text-end'>Paraksts: _________________________</p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Aizvērt
              </Button>

              <ReactToPrint
                trigger={() => <Button variant="primary" onClick={handleClose}>Printēt &nbsp;<i className='bi bi-printer'></i></Button>}
                content={() => componentRef.current}
              />
            </Modal.Footer>
          </Modal>

    </>
  )
}

export default Visit
