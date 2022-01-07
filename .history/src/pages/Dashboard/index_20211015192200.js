import './dashboard.css';
import { useState } from 'react';
import Header from '../../components/Header';
import Title from '../../'


export default function Dashboard(){
  const { signOut } = useContext(AuthContext);

  return(
    <div>
      <Header/>
      <h1>PAGINA DASHBOARD</h1>
     
    </div>
  )
}