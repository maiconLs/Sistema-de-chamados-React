import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth'

export default function Dashboard(){
  return(
    <div>
      <h1>PAGINA DASHBOARD</h1>
      <button>Fazer logout</button>
    </div>
  )
}