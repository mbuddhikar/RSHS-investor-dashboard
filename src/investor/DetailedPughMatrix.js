import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import image from './DetailedPughMatrix.PNG';

class DetailedPughMatrix extends Component {
    render() {
        return (
            <div>
                 <Navbar/>
                <img src={image} alt="img" width="100%" height="600"></img>
                <br/>
                <br/>
                <iframe width="100%" height="700px" src={"https://docdro.id/EbrCl84"} title="documnts"></iframe>
                <br/>
                <br/>
                <iframe width="100%" height="600" src="https://www.docdroid.net/zo2faaK/functional-requirements-pdf" frameborder="0" allowtransparency allowfullscreen></iframe>            </div>
        );
    }
}

export default DetailedPughMatrix;