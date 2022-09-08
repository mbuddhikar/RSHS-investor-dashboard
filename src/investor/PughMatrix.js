import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import imagepugh from './PughMatrix.PNG';
import imagereq from './Requirenments.png';
import imageapp from './Applist.png';
import { Col, Row, Tag } from 'antd';


class PughMatrix extends Component {
    render() {
        return (
            <div >
                <Navbar />
                <Row>
                <Col><div style={{maxWidth: "1000px",marginLeft:10,marginTop:10}}>
                <img src={imagepugh} alt="img" width="100%" height="600"></img>
                </div></Col> <Col><div style={{maxWidth: "",marginLeft:10,marginTop:12}}>
                <img src={imageapp} alt="img" width="%" height="450"></img>
                </div></Col>
                
                </Row>
            
                    <Row>
                    <Col><div style={{maxWidth: "1000px",marginLeft:10,marginTop:10}}>
                <img src={imagereq} alt="img" width="%" height="600"></img>
                </div></Col>
                    </Row>
                


            </div>
        );
    }
}

export default PughMatrix;