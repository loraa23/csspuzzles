import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './assets/GitHub_Invertocat_Black_Clearspace.svg'

const Footer = () => {

    return (
        <footer>
            <ul>
                <li>
                    <img src={Logo} alt="GitHub Invertocat" height={16} width={16} />
                    <Link to='https://github.com/loraa23/cssgames'>GitHub</Link>
                </li>
            </ul>

        </footer>
    )
}

export default Footer