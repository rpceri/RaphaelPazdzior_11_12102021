/* importé depuis index.js */

import { Component } from 'react';
import LaRoute from "./Routes.js";

import './App.scss'; /* toutes les scss du projet son importées depuis se script */

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      JsonDatas: [],// les données de logements.json seront stockées ici
      isLoading: false, // booléen permettant de savoir si les données sont en cours de chargement
      error: null,
    }
  }

  /* React.Component : componentDidMount() est appelée immédiatement après que le composant est monté (inséré dans l’arbre). C’est ici que vous devriez placer les initialisations qui requièrent l’existence de nœuds du DOM. Si vous avez besoin de charger des données depuis un point d’accès distant, c’est aussi le bon endroit pour déclencher votre requête réseau.*/
  //si chargement ok, les données du json sont dans this.state.JsonDatas
  async componentDidMount() {
    /*
    // ancienne methode, moins bien car les 2 then sont lancé en paraellèle !
    // setState : planifie des modifications à l’état local du composant, et indique à React que ce composant et ses enfants ont besoin d’être rafraîchis une fois l’état mis à jour. C’est en général ainsi qu’on met à jour l’interface utilisateur en réaction à des événements ou réponses réseau.
    this.setState({ isLoading: true });

    fetch(`${process.env.PUBLIC_URL}/datas/logements.json`)
      .then(response => { // https://www.pierre-giraud.com/javascript-apprendre-coder-cours/api-fetch/ : L’API Fetch fournit une définition pour trois interfaces Request, Response et Headers et implémente également le mixin Body qu’on va pouvoir utiliser avec nos requêtes.
        if (response.ok) return response.json(); // fetch() retourne  une promesse contenant la réponse (si tout se passe bien). 
                                                 // il faut indiquer le format de réponse souhaité : Ici, on choisit JSON avec response.json(). 
                                                 // la propriété ok contient un booléen : true si le statut code HTTP de la réponse est compris entre 200 et 299, false sinon. 
                                                 // La propriété status va renvoyer le statut code HTTP de la réponse (la valeur numérique liée à ce statut comme 200, 301, 404 ou 500). 
        else throw new Error('Erreur response json');
        })
      //.then(response => alert(JSON.stringify(response)))
      .then(donneesDuJson => this.setState({ JsonDatas: donneesDuJson, isLoading: false })) 
      .catch(error => this.setState({ error, isLoading: false }));
      */
      this.setState({ msg:"en cours de chargement", isLoading: true });
     
      try{
          const response = await fetch(`${process.env.PUBLIC_URL}/datas/logements_orig.json`); // bien metre ${process.env.PUBLIC_URL} sinon ca ne marche lpus au rechagement de la page de détail par ex
          let donneesDuJson = null;
          if (response.ok) donneesDuJson = await response.json();
         // alert(JSON.stringify(donneesDuJson))
          this.setState({ JsonDatas: donneesDuJson, isLoading: false }) ;
          return donneesDuJson;
      }
      catch(err){
          console.log('catch(err)');
          this.setState({ msg: "erreur lors du chargement", error: true, isLoading: false }) ;
          new Error('Erreur response json');
      }
  }
  
  render() {    
    if (this.state.error) {
      console.log(this.state.error + '<= this.state.error');
      console.log(this.state.error.message); // idem ci dessus mais sans le libellé de l'erreur
      return <p>{this.state.error.message}</p>;
    }
 
    if (this.state.isLoading) return <p className="enChargement">Page en cours de chargement ...</p>;
    else return (<LaRoute logementDatas={this.state.JsonDatas}/>)    
  }
}