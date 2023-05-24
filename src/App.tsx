import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import IVacation from './objects/vacation';
import { addVacation } from './redux/actions/vac_actions';
import HeaderMenu from './components/headerMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/mainPage';
import ContMainPage from './components/contMainPage';
import VacationsAll from './objects/vacationsArr';
import ContainerMainLikedPage from './components/ContainerMainLikedPage';


function App({ dispatch } : { dispatch : any }) {

  for(let el of VacationsAll) {
      el.id = Math.random() % 2_000_000_000;
      dispatch(addVacation(el));
  }

  return (
    <div className='App'>
    <BrowserRouter>
      <HeaderMenu />
          <Routes>
            <Route index path='/mainPage'
                   element={<ContMainPage />}/>
            <Route index path='/ContainerMainLikedPage'
                   element={<ContainerMainLikedPage key={2}/>}/>
          </Routes>
    </BrowserRouter>


    </div>
  );
}

export default connect()(App);
