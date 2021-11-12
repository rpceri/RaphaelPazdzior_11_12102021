/* importé depuis Routes.js */

import { Component } from "react";
import { Link } from "react-router-dom";

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

            {/*console.log(this.state.logementDatasCpHF)*/}
            <section className="section-home">
                {this.state.logementDatasCpHF.map(unLogement => {
                    return (
                        <Link to={`/DetailEtablissement/${unLogement.id}`} key={unLogement.id}> {/* link de react-router-dom permet d'avoir des balises <a> */}
                            <article>
                                <img src={unLogement.cover} alt={unLogement.title} />
                                <div className="FadeAway"></div>
                                <p>{unLogement.title}</p>
                            </article>
                        </Link>
                         )
                })}
            </section>
            </main>
        )
    }
}