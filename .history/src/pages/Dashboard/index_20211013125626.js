import { useContext } from 'react';
import Header from '../../components/Header'
import { AuthContext } from '../../contexts/auth'


export default function Dashboard(){

  return(
    <div>
      <Header/>
      <h1>PAGINA DASHBOARD</h1>
     
    </div>
  )
}