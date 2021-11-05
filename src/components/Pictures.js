/* importé depuis DetailEtablissement.js */

import { Component } from "react";

export default class Gallery extends Component {
    constructor(props) {
    super(props);
    this.state = {
        datas: this.props.datas,
        indexPhotoCourante: 0,
        nbPic: this.props.datas.flatMap(el => el.pictures).length
    }
    console.log(`nbPic = ${this.state.nbPic}`)
    };

    // methode retournant la source de l'image à afficher en fct de indexPhotoCourante passé en param
    srcPicCourante = (index) => {
        const src = this.state.datas.map(element => {
            return (element.pictures[index]);
        })
        return src;
    };

    previousPic = () => {
        this.setState({ indexPhotoCourante: this.state.indexPhotoCourante - 1 });
        if (this.state.indexPhotoCourante == 0) this.setState({ indexPhotoCourante: this.state.nbPic - 1 }); // si l'actuelle était la première, on affiche la dernière
    };
    nextPic = () => {
        this.setState({ indexPhotoCourante: this.state.indexPhotoCourante + 1 });
        if (this.state.indexPhotoCourante === this.state.nbPic - 1) this.setState({ indexPhotoCourante: 0 }); // si l'actuelle était la dernière, on affiche la dernière
    };

    render() {
        if(this.state.nbPic > 1)  return (
            <section className="gallerie">
                <img className='gallerie__image' src={this.srcPicCourante(this.state.indexPhotoCourante)} alt="Gallerie phoyo" />
                <div>
                    <a className="gallerie__bt gallerie__bt-precedent" onClick={this.previousPic}>
                        <i className="fas fa-chevron-left fa-7x"></i>
                    </a>
                    <a className="gallerie__bt gallerie__bt-suivant" onClick={this.nextPic}>
                        <i className="fas fa-chevron-right fa-7x"></i>
                    </a>
                </div>
            </section>
        );
        return('Pas de photo pour cet Appartement') // eviter de mettre le else (methode par sortie)'
    };
};


