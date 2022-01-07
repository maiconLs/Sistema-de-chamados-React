import './dashboard.css';
import { useState } from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';


export default function Dashboard(){

  return(
    <div>
      <Header/>
      <div className="content">
        <Title>
          <FiMessageSquare size={25}/>
        </Title>

        <div className="container dashboard">
          <span>Nenhum chamado registrado...</span>

          <Link>
            <FiPlus size={25} color=""/>
          </Link>
        </div>
      </div>
     
    </div>
  )
}