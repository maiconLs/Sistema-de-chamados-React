import { useState } from 'react';
import './customers.css';
import Title from '../../components/Title';
import Header from '../../components/Header';

import { FiUser } from 'react-icons/fi'

export default function Customers(){
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [Cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');


    return(

        <div>
            <Header/>

            <div className="content">
                <Title name="Clientes">
                    <FiUser size={25}/>
                </Title>

                <div className="container">
                    <form className="form-profile customers">
                        <label>Nome fantasia</label>
                        <input type="text" value={nome} onChange={(e) => setNome()}/>
                    </form>
                </div>
            </div>
        </div>
    )
}