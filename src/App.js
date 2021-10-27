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
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(`datas/logements.json`)
      .then(response => {
        if (response.ok) return response.json();
        else throw new Error('Erreur response json');
        })
      .then(donneesDuJson => this.setState({ JsonDatas: donneesDuJson, isLoading: false })) 
      .catch(error => this.setState({ error, isLoading: false }));
  }
  
  render() {    
    if (this.state.error) {
      console.log(this.state.error + ' : ');
      console.log(this.state.error.message); // idem ci dessus mais sans le libellé de l'erreur
      return <p>{this.state.error.message}</p>;
    }
 
    if (this.state.isLoading) return <p className="enChargement">Page en cours de chargement ...</p>;
    else return (<LaRoute logementDatas={this.state.JsonDatas}/>)    
  }
}