import { useState, useEffect} from 'react'

import { useNavigate, useParams } from 'react-router-dom'


const Visit = () => {

  const { id } = useParams();

  const axios = require('axios').default
  
  const [visit, setVisit] = useState({})

  useEffect(() => {
    axios.get('http://localhost:8000/api/visits/' + id ).then((response)=>{
        setVisit(response.data)
    })
  }, [])

  return (
    <div>{ visit.id}</div>
  )
}

export default Visit