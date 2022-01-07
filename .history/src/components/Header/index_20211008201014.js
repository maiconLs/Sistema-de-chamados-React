import './header.css';
import { useContext } from 'react';
import {AuthContext} from '../../contexts/auth';

export default function Header(){
    const { user } = useContext(AuthContext);

    return(
        <div className="sidebar">
        </div>
    )
}