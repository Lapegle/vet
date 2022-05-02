import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Container } from 'react-bootstrap'

import Header from './components/Header'

import Dashboard from './routes/Dashboard'
import Owners from './routes/Owners'
import Pets from './routes/Pets'
import Visits from './routes/Visits'




function Main() {
    return (
        <BrowserRouter>
            <Container>
                <Header />
                <Routes>
                    <Route path='/' element={<Dashboard />}/>
                    <Route path='/owners' element={<Owners />}/>
                    <Route path='/pets' element={<Pets />}/>
                    <Route path='/visits' element={<Visits />}/>
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
