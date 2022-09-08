import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import imagepugh from './PughMatrix.PNG';
import imagereq from './Requirenments.png';
import imageapp from './Applist.png';
import { Col, Row, Tag } from 'antd';
import Surveysummary from './Surveysummary';
import AppUsage from './AppUsage';

class SurveyResults extends Component {
    render() {
        return (
            <div >
                <Navbar />
                <h2 style={{ marginLeft: 10, marginTop: 20, color: "#FF7F50" }} >Summary of Consumer survey</h2>
                <Row>
                    <Col style={{width:900}}> 
                        <Surveysummary />
                    </Col>
                    <Col style={{width:900}}> 
                        <AppUsage />
                    </Col>

                </Row>
                <h3 style={{ marginLeft: 10, marginTop: 20, color: "#FF7F50" }}>The detailed results of the survey</h3>
                <iframe width="100%" height="600" src="https://www.docdroid.net/9mg8M3H/results-survey-pdf" frameborder="0" allowtransparency allowfullscreen></iframe>
                <Row>
                   
                </Row>



            </div>
        );
    }
}

export default SurveyResults;