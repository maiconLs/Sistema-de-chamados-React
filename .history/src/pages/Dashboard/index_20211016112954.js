import './dashboard.css';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import firebase from '../../services/firebaseConnection';

const listRef = firebase.firestore().collection('chamados').orderBy('created', 'desc');

export default function Dashboard(){

  const [chamados, setChamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(()=>{

    loadChamados();

    return () =>{

    }
  },[])

  async function loadChamados(){
    await listRef.limit(5)
    .get()
    .then((snapshot)=>{
      updateState(snapshot)
    })
    .catch((error)=>{
      setLoadingMore(false);
    })
    setLoading(false);

  }

  async function updateState(snapshot){
    const isCollectionEmpty = snapshot.size === 0;

    if(!isCollectionEmpty){
      let lista = [];

      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          assunto: doc.data().assunto,
          cliente: doc.data().cliente,
          clienteId: doc.data().clienteId,
          created: doc.data().created,
          createdFormated: doc
        })
      })
    }
  }

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
                    <span className="badge" style={{backgroundColor: '#5cb85c'}}>Em aberto</span>
                  </td>
                  <td data-label="Cadastrado">15/10/2021</td>
                  <td data-label="#">
                    <button className="action" style={{backgroundColor: '#3583f6'}}>
                      <FiSearch color="#FFF" size={17}/>
                    </button>

                    <button className="action" style={{backgroundColor: '#F6a935'}}>
                      <FiEdit2 color="#FFF" size={17}/>
                    </button>
                  </td>

                </tr>
              </tbody>
            </table>
          </>
        )}
        
      </div>
     
    </div>
  )
}