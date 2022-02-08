import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import ReactGA from 'react-ga';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

class Skills extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.userdata);
    }

    componentDidMount() {

        ReactGA.pageview('/Skills');

    }
    render() {
        return (
            <div>
                <div style={{ backgroundColor: '#fff', width: '98vw', height: '90vh', marginTop: 0 }}>
                    <Doughnut data={this.props.userdata} options={{ maintainAspectRatio: false }} />
                </div>

                {/* <div>
                    <h2>Bar Example (custom size)</h2>
                    <Bar
                        data={data}
                        width={50}
                        height={50}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </div> */}
            </div>
        )
    }

}

export default Skills;