/* importé depuis Routes.js */

import { Component } from "react";


export default class Footer extends Component {
    
    render() {
        return (
            <footer>
                <div className='logo'>
                    <img src={`${process.env.PUBLIC_URL}/img/logo_kasa_blanc.png`} alt="Kasa" />
                </div>
                <p>2020 Kasa. All rights reserved</p>
            </footer>        
        )
    }
}