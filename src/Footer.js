import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer>
            <ul>
                <li>
                    <img src="GitHub_Invertocat_Black_Clearspace.svg" alt="GitHub Invertocat" height={16} width={16} />
                    <Link to='https://github.com/loraa23/cssgames'>GitHub</Link>
                </li>
            </ul>

        </footer>
    )
}

export default Footer