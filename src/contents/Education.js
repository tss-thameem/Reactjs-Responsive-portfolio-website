import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Mca Computer Application" where="Bharathidasan University" from="July 2015" to="Past" />
                <Widecard title="SSLC | HSC" where="Km Higher Secondary School" from="2009" to="2015" />
            </div>
        )
    }
}
export default Education