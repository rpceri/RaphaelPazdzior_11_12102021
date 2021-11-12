/* importé depuis DetailEtablissement.js */

import { Component } from "react";

export default class PicturesGalery extends Component {
    constructor(props) {
    super(props);
    this.state = {
        datas: this.props.datas, /* = this.state.DonneesDeLetab[0].pictures*/
        indexPhotoCourante: 0,
        nbPic: this.props.datas.length
    }
    console.log(`nbPic = ${this.state.nbPic}`)
    };

    // methode retournant la source de l'image à afficher en fct de indexPhotoCourante passé en param
    srcPicCourante = (index) => {
        const src = this.state.datas[index]
        return src
    };

    previousPic = () => {
        this.setState({ indexPhotoCourante: this.state.indexPhotoCourante - 1 });
        if (this.state.indexPhotoCourante === 0) this.setState({ indexPhotoCourante: this.state.nbPic - 1 }); // si l'actuelle était la première, on affiche la dernière
    };
    nextPic = () => {
        this.setState({ indexPhotoCourante: this.state.indexPhotoCourante + 1 });
        if (this.state.indexPhotoCourante === this.state.nbPic - 1) this.setState({ indexPhotoCourante: 0 }); // si l'actuelle était la dernière, on affiche la dernière
    };

    render() {
        if(this.state.nbPic > 0)  return (
            <section className="gallerie">

                <img className='gallerie__image' src={this.srcPicCourante(this.state.indexPhotoCourante)} alt="Gallerie" />
                {this.state.nbPic > 1 && // Condition à la volée avec l’opérateur logique &&, évit de mettre : '' (opérateur ternaire)
                <div>
                    <a href="#s" className="gallerie__bt gallerie__bt-precedent" onClick={this.previousPic}>
                        <i className="fas fa-chevron-left fa-7x"></i>
                    </a>
                    <a href="#s" className="gallerie__bt gallerie__bt-suivant" onClick={this.nextPic}>
                        <i className="fas fa-chevron-right fa-7x"></i>
                    </a>
                </div>
                }
            </section>
        )
        return('Pas de photo pour cet Appartement') // eviter de mettre le else (methode par sortie)'
    };
};


