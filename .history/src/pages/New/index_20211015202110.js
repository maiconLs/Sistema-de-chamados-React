import './new.css';
import Header from '../../components/Header';
import Title from '../../components/Title';

import { FiPlusCircle } from 'react-icons/fi';

export
 default function New(){
    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Novo chamado">
                    <FiPlusCircle size={25}/>
                </Title>

                <div className="container">

                    <form className="form-profile">
                        <label>Clientes</label>

                        <select>
                            <option key={1} value={1}>
                                Sujeito
                            </option>
                        </select>

                        <label>Assunto</label>

                        <select>
                            <option></option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    )
}