import { React, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import PetVisitsGrid from '../../components/grids/PetVisitsGrid';

const PetVisits = () => {

  const { id } = useParams();

  const axios = require('axios').default

  const [pet, setPet] = useState({})

  useEffect(() => {
      axios.get('http://localhost:8000/api/pets/' + id ).then((response)=>{
          setPet(response.data)
      })
  
  }, [])

  return (
    <div>
      <h2><strong>{pet.name}</strong> apmeklējumi</h2>
      <PetVisitsGrid id={id} />
    </div>

  )
}

export default PetVisits