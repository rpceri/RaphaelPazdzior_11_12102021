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

    // mthode appelé sur onclick
    ouvreBlocSurClick = () => {
        this.state.isBlocCourantOuvert ? this.setState({ isBlocCourantOuvert: false }) : this.setState({ isBlocCourantOuvert: true });
    }

    
    render() {
        return (
            
            <div className={this.state.class}>
                <div className={`${this.state.class}__header`} onClick={this.ouvreBlocSurClick}>
                    <h4>{this.state.donneesBloc.titre}</h4>
                </div>
                <div >
                    <p >
                        {this.state.donneesBloc.texte}
                    </p>
                </div>
            </div>
            
        )
    }
}