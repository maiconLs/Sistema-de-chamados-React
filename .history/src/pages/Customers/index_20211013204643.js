import './customers.css';
import Title from '../../components/Title';
import Header from '../../components/Header';

import { FiUser } from 'react-icons/fi'

export default function Customers(){
    return(

        <div>
            <Header/>

            <div className="content">
                <Title name="Clientes">
                    <FiUser size={25}/>
                </Title>

                <div className="container">
                    <form className="form">

                    </form>
                </div>
            </div>
        </div>
    )
}