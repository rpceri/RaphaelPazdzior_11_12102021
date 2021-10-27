/* importé depuis Routes.js */

import { Component } from "react";

import BlocDynamique from "./BlocDynamique.js";

export default class About extends Component {
    constructor(props) {
    super(props);
    this.state = {
      blocFiabilite: {
        titre: "Fiabilité",
        texte: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
      },
      blocRespect: {
        titre: "Respect",
        texte: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      },
      blocService: {
        titre: "Service",
        texte: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      },
      blocSecu: {
        titre: "Sécurité",
        texte: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      },
      class: "BlocDynAbout"
    }
  }

    render() {
        return(
          <main>
            <div className="about">
              <div className="imgEntete" style={{backgroundImage: `url('img/background_about.png')`}}>
              </div>

              <BlocDynamique donneesBloc={this.state.blocFiabilite} class={this.state.class} />
              <BlocDynamique donneesBloc={this.state.blocRespect} class={this.state.class} />
              <BlocDynamique donneesBloc={this.state.blocService} class={this.state.class} />
              <BlocDynamique donneesBloc={this.state.blocSecu} class={this.state.class} />
            </div>
          </main>
        )
    }
}