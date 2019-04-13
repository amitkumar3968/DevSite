import React, { Component } from 'react';
import ReactGA from 'react-ga';

class Services extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        ReactGA.pageview('/Services');

    }
    render() {
        return (
            <div style={{ marginTop: 80 }}>
                Services I Provide - 
                <div style={{marginTop:20, marginLeft:20}}>
                {
                    this.props.userdata.map(
                        (value, index) => {
                            return (

                                <li key={index}>
                                    <u>
                                        <i>{value}
                                        </i>
                                    </u>
                                </li>
                            )
                        }
                    )
                }
                </div>
            </div>
        )
    }
}
export default Services;