import React from 'react';
import '../styles/styleForHreader.css';
import {connect} from 'react-redux';
import IMenuLinks from '../objects/menuLinsks';
import { Link } from "react-router-dom";


export default function HeaderMenu() {
  const links : IMenuLinks[] = [
    { text:  "Поиск вакансий", href: "/MainPage"},
    { text:  "Избранные вакансии", href: "/ContainerMainLikedPage"}
];

  return (
    <div className='main'>
    <div className='Menu'>
      <h3 className='MenuItemMain'>FRONTEND JOB</h3>
     { 
     links?.map(element => 
            <Link to={element.href as string} onClick={element.onClick} className='MenuItems'>{element.text}</Link>
      ) }
    </div>
    </div>
  );
}

