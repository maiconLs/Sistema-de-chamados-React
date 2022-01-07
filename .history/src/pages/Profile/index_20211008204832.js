import './profile.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import FiSettings} from 'react-icons/fi'

export default function Profile(){
    return(
        <div>
            <Header/>
            
            <div className="content">
                <Title name="Mau perfil">
                    <FiSettings />
                </Title>
            </div>
        </div>
    )
}