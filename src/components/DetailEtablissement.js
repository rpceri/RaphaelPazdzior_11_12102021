import { Component } from "react";
import { withRouter } from "react-router";
//import { NavLink, Redirect } from "react-router-dom";
import ComposantPage404 from "./Page404.js"

import BlocDynamique from "./BlocDynamique.js";
import PicturesGalery from "./PicturesGalery.js";

class DetailEtablissement extends Component {
    constructor(props) {
    super(props);
    //console.log(`this.props.match.params.etablissementId : ${this.props.match.params.etablissementId}`)
        this.state = {
            DonneesDeLetab: this.props.logementDatasDe.filter(elemnt => elemnt.id === this.props.match.params.etablissementId)[0], // pour n'avoir que les données de l'étab
        }
    
    };
    
    render() {
        const elCourant  = this.state.DonneesDeLetab
        // si l'id passé en parametre ne matche pas :
        if (!this.state.DonneesDeLetab) return (
           // <Redirect to="/404"></Redirect>
          <ComposantPage404 />
        )

        
        const rating = elCourant.rating
        const pourcentage = (rating / 5) * 100; // 5 = nb étoiles Max
        const pourcentageEntier = `${(Math.round(pourcentage / 10) * 10)}%`;

        const blocEquipements2 = {
            titre: "Equipements",
            texte: elCourant.equipments.map((et, index) => {
                return <li className="equipments__list-item" key={index}>{et}</li>
            })        
        }
        const blocDescription2 = {
            titre: "Description",
            texte: elCourant.description,
        }


        return (
                    <main key={elCourant.id}>
                        <PicturesGalery datas={elCourant.pictures} />
                        <section className="info-etab-detail">
                            <div className="info-etab-detail__gauche">
                                <h1 className="info-etab-detail__gauche__title">{elCourant.title}</h1>
                                <p className="info-etab-detail__gauche__location">{elCourant.location}</p>
                                <div key={elCourant.id} className="tags">
                                    {elCourant.tags.map((e, index) => {
                                    return <p key={index} className="tags__unTag">{e}</p>
                                    })}
                                </div>
                            </div>

                            <div className="info-etab-detail__droite">
                                <div className="info-etab-detail__droite__info-auteur">
                                    <div className="info-etab-detail__droite__auteur"> 
                                    { /* decompo de "host": {"name": "Nathalie Jean",} : */ }
                                        <p className="info-etab-detail__droite__auteur__firstname">{elCourant.host.name.split(' ', 1)}</p>
                                        <p className="info-etab-detail__droite__auteur__lastname">{elCourant.host.name.split(' ').pop()}</p>
                                    </div>
                                    <img src={elCourant.host.picture} alt="{elCourant.host.name}" />
                                </div>
                                <div className='scores'>
                                    <div className="scores__stars-fond">
                                        <div className="scores__stars-inner" style={{width: pourcentageEntier}}>{pourcentageEntier}</div>   
                                    </div>
                                </div>
                            </div> 
                          </section>
                          <section className="general-info">
                            <BlocDynamique donneesBloc={blocDescription2} class="BlocDynDetailEtab" />
                            <BlocDynamique donneesBloc={blocEquipements2} class="BlocDynDetailEtab" />
                          </section>
                          
                    </main>
        )

    };

};

export default withRouter(DetailEtablissement) // https://www.it-swarm-fr.com/fr/reactjs/quest-ce-que-withrouter-pour-react-router-dom/808235258/ le composant d'en-tête est encapsulé dans une withRouter fonction, Cela donne au Headercomposant l'accès à this.props.history, ce qui signifie que l'en-tête peut désormais rediriger l'utilisateur.
// utile pour récuperer le paramètre etablissementId