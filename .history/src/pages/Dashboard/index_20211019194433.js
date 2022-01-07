
import './dashboard.css';
import { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import firebase from '../../services/firebaseConnection';
import Modal from '../../components/Modal';



export default function Dashboard(){
  const [chamados, setChamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [lastDocs, setLastDocs] = useState();
  const [order, setOrder] = useState('desc');

  const [showPostModal, setShowPostModal] = useState(false);
  const [detail, setDetail] = useState();
  

  useEffect(()=> {
    
    async function loadChamados(){
      
      await firebase.firestore().collection('chamados').orderBy('created', order).limit(5)
      .get()
      .then((snapshot) => {
        setChamados([])
        updateState(snapshot)
      })
      .catch((err)=>{
        console.log('Deu algum erro: ', err);
        setLoadingMore(false);
      })
  
      setLoading(false);
  
    }

    loadChamados();


    console.log(order)

    return () => {

    }
  }, [order]);

  function handleOrder(e){
    setOrder(e.target.value);

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
          createdFormated: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
          status: doc.data().status,
          complemento: doc.data().complemento
        })
      })

      const lastDoc = snapshot.docs[snapshot.docs.length -1]; //Pegando o ultimo documento buscado
      
      setChamados(chamados => [...chamados, ...lista]);
      setLastDocs(lastDoc);

    }else{
      setIsEmpty(true);
    }

    setLoadingMore(false);

  }


  async function handleMore(){
    setLoadingMore(true);
    await firebase.firestore().collection('chamados').orderBy('created', order).startAfter(lastDocs).limit(5)
    .get()
    .then((snapshot)=>{
      updateState(snapshot)
    })
  }


  function togglePostModal(item){
    setShowPostModal(!showPostModal) //trocando de true pra false
    setDetail(item);
  }

  async function deleteItem(item){
    await firebase.fire
  }

 

  if(loading){
    return(
      <div>
        <Header/>

        <div className="content">
          <Title name="Atendimentos">
            <FiMessageSquare size={25} />
          </Title>  

          <div className="container dashboard">
            <span>Buscando chamados...</span>
          </div>

        </div>      
      </div>
    )
  }

  return(
    <div>
      <Header/>

      <div className="content">
        <Title name="Atendimentos">
          <FiMessageSquare size={25} />
        </Title>

        {chamados.length === 0 ? (
          <div className="container dashboard">
            <span>Nenhum chamado registrado...</span>

            <Link to="/new" className="new">
              <FiPlus size={25} color="#FFF" />
              Novo chamado
            </Link>
          </div>
        )  : (
          <>
            <select value={order} onChange={handleOrder}>
              <option value='desc'>Mais recentes</option>
              <option value='asc'>Mais antigos</option>
            </select>

            <Link to="/new" className="new">
              <FiPlus size={25} color="#FFF" />
              Novo chamado
            </Link>

            <table>
              <thead>
                <tr>
                  <th scope="col">Cliente</th>
                  <th scope="col">Assunto</th>
                  <th scope="col">Status</th>
                  <th scope="col">Cadastrado em</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                {chamados.map((item, index)=>{
                  return(
                    <tr key={index}>
                      <td data-label="Cliente">{item.cliente}</td>
                      <td data-label="Assunto">{item.assunto}</td>
                      <td data-label="Status">
                        <span className="badge" style={{ backgroundColor: item.status === 'Aberto' ? '#5cb85c' : '#999' }}>{item.status}</span>
                      </td>
                      <td data-label="Cadastrado">{item.createdFormated}</td>
                      <td data-label="#">
                        <button className="action" style={{backgroundColor: '#3583f6' }} onClick={ () => togglePostModal(item) }>
                          <FiSearch color="#FFF" size={17} />
                        </button>
                        <Link className="action" style={{backgroundColor: '#F6a935' }} to={`/new/${item.id}`} >
                          <FiEdit2 color="#FFF" size={17} />
                        </Link>
                        <button className="action" style={{backgroundColor: '#A9A9A9' }} onClick={ () => deleteItem(item) }>
                          <FiTrash2 color="#FFF" size={17} />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            
            {loadingMore && <h3 style={{textAlign: 'center', marginTop: 15 }}>Buscando dados...</h3>}
            { !loadingMore && !isEmpty && <button className="btn-more" onClick={handleMore}>Buscar mais</button> }

          </>
        )}

      </div>

      {showPostModal && (
        <Modal
          conteudo={detail}
          close={togglePostModal}
        />
      )}

    </div>
  )
}