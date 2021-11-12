/* utilisé dans App.js*/

import {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import ComposantHeader from "./components/Header.js";
import ComposantFooter from "./components/Footer.js";
import ComposantPageHome from "./components/Home.js";
import ComposantPageAbout from "./components/About.js";
import ComposantDetailEtablissement from "./components/DetailEtablissement.js";
import ComposantPage404 from "./components/Page404.js"

export default class RouteConfig extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <ComposantHeader />

                    <Switch>
                        <Route exact path="/">
                            <ComposantPageHome logementDatasCpH={this.props.logementDatas}/>
                        </Route>
                        <Route path="/about">
                            <ComposantPageAbout />
                        </Route>
                        <Route path="/DetailEtablissement/:etablissementId">
                            <ComposantDetailEtablissement logementDatasDe={this.props.logementDatas} />
                        </Route>
                        <Route>
                            <ComposantPage404 />
                        </Route>
                    </Switch>

                    <ComposantFooter />
                </BrowserRouter>
            </div>
        );
    }
}

