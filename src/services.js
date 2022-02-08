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
            <div style={{ marginLeft: 40 }}>
                Services I Provide -
                <div style={{ marginTop: 0, marginLeft: 0 }}>
                    <ul>
                        {
                            this.props.userdata.Services.map(
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
                    </ul>
                </div>
                <br />
                <div>
                    D3 Demo/POC--
                    <a href={this.props.userdata.DemoWork}>Interactive Family Tree</a>
                </div>

            </div>
        )
    }
}
export default Services;