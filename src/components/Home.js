/* importé depuis Routes.js */

import { Component } from "react";

export default class Home extends Component {
    constructor(props) {
    super(props); // Dans les classes JavaScript, vous devez toujours appeler super quand vous définissez le constructeur d’une sous-classe. Tous les composants React à base de classes qui ont leur propre constructor devraient le faire démarrer par un appel à super(props).
    this.state = {
      logementDatasCpHF: this.props.logementDatasCpH,
    }
  }
  render() {
        return (
            <main>
              <div className="imgEntete" style={{backgroundImage: `url('img/background_home.png')`}}>
                <h3 className="imgEntete__title">Chez vous, partout et ailleurs</h3>
              </div>

            {console.log(this.state.logementDatasCpHF)}

            </main>
        )
    }
}