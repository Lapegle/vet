import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Container } from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css"

import Header from './components/Header'

import Home from './routes/Home'
import Owners from './routes/owners/Owners'
import AddOwner from './routes/owners/AddOwner'
import EditOwner from './routes/owners/EditOwner'
import OwnerPets from './routes/pets/OwnerPets'

import Pets from './routes/pets/Pets'
import AddPet from './routes/pets/AddPet'
import EditPet from './routes/pets/EditPet'

import Visits from './routes/visits/Visits'
import Visit from './routes/visits/Visit'
import EditVisit from './routes/visits/EditVisit'
import AddVisit from './routes/visits/AddVisit'
import PetVisits from './routes/visits/PetVisits'
import NotFound from './routes/NotFound'

import Medicaments from './routes/medicaments/Medicaments'
import AddMedicament from './routes/medicaments/AddMedicament'
import EditMedicament from './routes/medicaments/EditMedicament'

import Manipulations from './routes/manipulations/Manipulations'
import AddManipulation from './routes/manipulations/AddManipulation'
import EditManipulation from './routes/manipulations/EditManipulation'

import Login from './components/Login';




function Main() {

    const [user, setUser] = useState()

    const [email, setEmail] = useState('test@example.com')
    const [password, setPassword] = useState('password')

    useEffect(() => {
        axios.get('https://danielsvet.herokuapp.com/sanctum/csrf-cookie').then((response) => {
            getUser()
        })
    }, [])

    const getUser = () => {
        axios.get('https://danielsvet.herokuapp.com/api/user').then((response) => {
            setUser(response.data)
        })
    }

    return (
        <>
            {
                user ? (
                    <BrowserRouter>
                    <Container fluid='lg'>
                        <Header setUser={setUser}/>
                        <Routes>
                            <Route path='/' exact element={<Home />}/>
                            <Route path='/owners' element={<Owners />}/>
                            <Route path='/owners/create' element={<AddOwner />}/>
                            <Route path='/owners/edit/:id' element={<EditOwner />}/>
                            <Route path='/pets/owner/:id' element={<OwnerPets />}/>
    
                            <Route path='/pets' element={<Pets />}/>
                            <Route path='/pets/create' element={<AddPet />}/>
                            <Route path='/pets/edit/:id' element={<EditPet />} />
    
                            <Route path='/visits' element={<Visits />}/>
                            <Route path='/visit/:id' element={<Visit />}/>
                            <Route path='/visit/edit/:id' element={<EditVisit />}/>
                            <Route path='/visits/create' element={<AddVisit />} />
                            <Route path='/visits/pet/:id' element={<PetVisits />}/>
    
                            <Route path='/medicaments' element={<Medicaments />}/>
                            <Route path='/medicaments/create' element={<AddMedicament />}/>
                            <Route path='/medicaments/edit/:id' element={<EditMedicament />}/>
    
                            <Route path='/manipulations' element={<Manipulations />} />
                            <Route path='/manipulations/create' element={<AddManipulation />}/>
                            <Route path='/manipulations/edit/:id' element={<EditManipulation />}/>
    
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </Container>
                </BrowserRouter>
                ) : (
                    <Login getUser={getUser} />
                )
            }

        </>

    );
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(
        <Main />,
    document.getElementById('root'));
}
