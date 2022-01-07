import './header.css';
import { useContext } from 'react';
import {AuthContext} from '../../contexts/auth';
import avatar from '../../assets/avatar.png';
import 

export default function Header(){
    const { user } = useContext(AuthContext);

    return(
        <div className="sidebar">
            <div>
                <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="Foto perfil"/>
            </div>
        </div>
    )
}