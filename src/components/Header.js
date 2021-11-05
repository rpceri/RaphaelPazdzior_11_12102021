/* importé depuis Routes.js */

import { Component } from "react";
import { NavLink } from "react-router-dom"; // permet d'ajouter des balise <a>


export default class Header extends Component {    
    render() {
        return (
            <header className='header'>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/logo_kasa_rouge.png`} alt="Kasa" />
                </div>
                <div className='header__links'>
                    <NavLink exact activeClassName='active' to="/">Accueil</NavLink> {/* exact car sinon le chemin / est toujours vrai*/}
                    <NavLink activeClassName='active' to="/about">A Propos</NavLink>
                </div>
            </header>        
        )
    }
}