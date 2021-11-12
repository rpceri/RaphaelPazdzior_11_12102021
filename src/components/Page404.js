/* importé depuis Routes.js */

import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Home extends Component {

  render() {
        return (
            <main>
            <section className="page404">
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <NavLink className="retourAccueil" to="/">Retourner sur la page d'accueil</NavLink>
            </section>
            </main>
        )
    }
}