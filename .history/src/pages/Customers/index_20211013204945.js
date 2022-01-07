import { useState } from 'react';
import './customers.css';
import Title from '../../components/Title';
import Header from '../../components/Header';

import { FiUser } from 'react-icons/fi'

export default function Customers(){
    const [nomeFantasia, setN]

    return(

        <div>
            <Header/>

            <div className="content">
                <Title name="Clientes">
                    <FiUser size={25}/>
                </Title>

                <div className="container">
                    <form className="form-profile customers">

                    </form>
                </div>
            </div>
        </div>
    )
}