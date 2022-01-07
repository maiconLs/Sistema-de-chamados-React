import './header.css';
import { useContext } from 'react';
import {AuthContext} from '../../contexts/auth';

export default function Header(){
    const { user } = useContext(AuthContext)
    return(
        <div>
            <h1>Header</h1>
        </div>
    )
}