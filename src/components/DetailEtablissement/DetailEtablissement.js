import { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import BlocDynamique from "../BlocDynamique.js";

class DetailEtablissement extends Component {
    constructor(props) {
    super(props);
    //console.log(`this.props.match.params.etablissementId : ${this.props.match.params.etablissementId}`)
        this.state = {
            datas: this.props.logementDatasDe,
            DonneesDeLetab: this.props.logementDatasDe.filter(elemnt => elemnt.id === this.props.match.params.etablissementId), // pour n'avoir que les données de l'étab

            blocDescription: {
                titre: "Description",
                texte: (this.props.logementDatasDe.filter(elemnt => elemnt.id === this.props.match.params.etablissementId)).map(elmnt => elmnt.description),
            },

            blocEquipements: {
                titre: "Equipements",
                texte: (this.props.logementDatasDe.filter(elemnt => elemnt.id === this.props.match.params.etablissementId)).map((el => el.equipments.map((el, index) => {
                        return <li className="equipments__list-item" key={index}>{el}</li>
                    }))),
            },
            classBlocDyn: "BlocDynDetailEtab",
        }
    
    };
    
    render() {
        // si l'id passé en parametre ne matche pas :
        if (this.state.DonneesDeLetab.length === 0) return (
            <section className="">
                <div className="">
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <NavLink to="/">Retourner sur la page d'accueil</NavLink>
                </div>
            </section>          
        )

        const rating = this.state.DonneesDeLetab.map(ele => ele.rating);
        const pourcentage = (rating / 5) * 100; // 5 = nb étoiles Max
        const pourcentageEntier = `${(Math.round(pourcentage / 10) * 10)}%`;

        return (
            <> { /* <> = fragment pour grouper la liste des enfants */ }
              {this.state.DonneesDeLetab.map(elCourant => {
                  return (
                    <main key={elCourant.id}>
                        <section className="info-etab-detail">
                            <div className="info-etab-detail__gauche">
                                <h1 className="info-etab-detail__gauche__title">{elCourant.title}</h1>
                                <p className="info-etab-detail__gauche__location">{elCourant.location}</p>
                                tags :
                                <div key={elCourant.id} className="tags">
                                    {elCourant.tags.map((e, index) => {
                                    return <p key={index} className="tags__item">{e}</p>
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
                            <BlocDynamique donneesBloc={this.state.blocDescription} class={this.state.classBlocDyn} />
                            <BlocDynamique donneesBloc={this.state.blocEquipements} class={this.state.classBlocDyn} />
                          </section>
                          
                    </main>
                         )
                })}
            </>
        )
    };
    
};

export default withRouter(DetailEtablissement); // le composant d'en-tête est encapsulé dans une withRouter fonction, Cela donne au Headercomposant l'accès à this.props.history, ce qui signifie que l'en-tête peut désormais rediriger l'utilisateur.