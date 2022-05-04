import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Container } from 'react-bootstrap'

import Header from './components/Header'

import Home from './routes/Home'
import Owners from './routes/owners/Owners'
import AddOwner from './routes/owners/AddOwner'
import OwnerPets from './routes/pets/OwnerPets'
import Pets from './routes/pets/Pets'
import Visits from './routes/visits/Visits'
import PetVisits from './routes/visits/PetVisits'
import NotFound from './routes/NotFound'




function Main() {
    return (
        <BrowserRouter>
            <Container>
                <Header />
                <Routes>
                    <Route path='/' exact element={<Home />}/>
                    <Route path='/owners' element={<Owners />}/>
                    <Route path='/owners/create' element={<AddOwner />}/>
                    <Route path='/pets/owner/:id' element={<OwnerPets />}/>
                    <Route path='/pets' element={<Pets />}/>
                    <Route path='/visits' element={<Visits />}/>
                    <Route path='/visits/pet/:id' element={<PetVisits />}/>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Container>
      </BrowserRouter>
    );
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(
        <Main />,
    document.getElementById('root'));
}
