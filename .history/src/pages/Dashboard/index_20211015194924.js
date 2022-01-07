import './dashboard.css';
import { useState } from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';


export default function Dashboard(){

  const [chamados, setChamados] = useState([]);

  return(
    <div>
      <Header/>
      <div className="content">
        <Title name="Atendimentos">
          <FiMessageSquare size={25}/>
        </Title>
      
        {chamados.length === 0 ? (
          <div className="container dashboard">
            <span>Nenhum chamado registrado...</span>

            <Link to="/new" className="new">
              <FiPlus size={25} color="#FFF"/>
                Novo chamado
            </Link>
          </div>
        ) : (
          <>
            <Link to="/new" className="new">
              <FiPlus size={25} color="#FFF"/>
                Novo chamado
            </Link>

            <table>
              <thead>
                <tr>
                  <th socpe="col">Clientes</th>
                  <th socpe="col">Assunto</th>
                  <th socpe="col">Status</th>
                  <th socpe="col">Cadastrado em</th>
                  <th socpe="col">#</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Cliente">Sujeito</td>
                  <td data-label="Assunto">Suporte</td>
                  <td data-label="Status">
                    
                  </td>
                  <td data-label="Cliente">Sujeito</td>
                  <td data-label="Cliente">Sujeito</td>

                </tr>
              </tbody>
            </table>
          </>
        )}
        
      </div>
     
    </div>
  )
}