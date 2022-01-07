import './new.css';
import Header from '../../components/Header';
import Title from '../../components/Title';

import { FiPlayCircle } from 'react-icons/fi';

export
 default function New(){
    return(
        <div>
            <Header/>
            <div className="content">
                <Title className="">
                    <FiPlayCircle size={25}/>
                </Title>
            </div>
        </div>
    )
}