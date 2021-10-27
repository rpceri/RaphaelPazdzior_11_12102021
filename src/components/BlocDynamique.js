/* importé depuis About.js */

import { Component } from "react";

export default class BlocDynamique extends Component {
    constructor(props) {
    super(props);
    this.state = {
        isBlocCourantOuvert: false,
        donneesBloc: this.props.donneesBloc,
        class: this.props.class,
    }
    };

    // methode appelée sur onclick
    ouvreBlocSurClick = () => {
        // setState : planifie des modifications à l’état local du composant, et indique à React que ce composant et ses enfants ont besoin d’être rafraîchis une fois l’état mis à jour. C’est en général ainsi qu’on met à jour l’interface utilisateur en réaction à des événements ou réponses réseau.
        this.state.isBlocCourantOuvert ? this.setState({ isBlocCourantOuvert: false }) : this.setState({ isBlocCourantOuvert: true });
    }

    
    render() {
        return (
            <div className={this.state.class}>
                <div className={`${this.state.class}__header`} onClick={this.ouvreBlocSurClick}>
                    <h1>{this.state.donneesBloc.titre}</h1><i className="fas {this.state.isBlocCourantOuvert ? fa-chevron-up : fa-chevron-down}"></i>
                </div>
                <div className={this.state.isBlocCourantOuvert ? `${this.state.class}__div--open` : `${this.state.class}__div`}>
                    <p className={this.state.isBlocCourantOuvert ? `${this.state.class}__text--open` : `${this.state.class}__text`}>
                        {this.state.donneesBloc.texte}
                    </p>
                </div>
            </div>
        )
    }
}