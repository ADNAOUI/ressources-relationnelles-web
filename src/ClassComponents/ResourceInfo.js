//----- MODULES -----//
import React, { Component } from 'react'
import OverlayInfo from '../ClassComponents/OverlayInfo.js';

//----- STYLES -----//
import '../assets/css/ResourceInfo.css'

class ResourceInfo extends Component {
    render() {
        return (
            <div className="perimetreResourceInfo">
                <h1>Le TitreDeLaRessource</h1>
                <input type="button" value="Rubrique"/>
				<input type="button" value="Informations"/>
                <OverlayInfo />
            </div>
        );
    }
}

export default ResourceInfo;