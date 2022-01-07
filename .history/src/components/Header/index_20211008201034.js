import './header.css';
import { useContext } from 'react';
import {AuthContext} from '../../contexts/auth';
import avatar from '../../'

export default function Header(){
    const { user } = useContext(AuthContext);

    return(
        <div className="sidebar">
            <div>

            </div>
        </div>
    )
}