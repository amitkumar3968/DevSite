var moment = require('moment');
import React, { Component } from 'react';
import { deflate } from 'zlib';

class Experience extends React.Component {
    constructor(props) {
        super(props);
    }

    gettimeDuration(startingdate) {

        // assuming startingdate is of format -- dd/MM/YYYY
        // alert(startingdate);
        // console.log(typeof (startingdate));
        var parts = startingdate.split('/');
        // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
        // January - 0, February - 1, etc.
        var mydate = new Date(parts[2], parts[1] - 1, parts[0]);
        // console.log(mydate.getTime());
        var currentDate = new Date();
        // console.log(currentDate.getTime());

        // console.log(moment.duration(currentDate - mydate).years()); // This should returns 5
        // console.log(moment.duration(currentDate - mydate).months());

        var totalExp = moment.duration(currentDate - mydate).years().toString() + '.' +
            moment.duration(currentDate - mydate).months().toString() + ' Yrs';


        return totalExp;
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' ,marginLeft:40 }}>
                    <div style={{
                        marginTop: 80, flexDirection: 'column',
                        display: 'flex', backgroundColor: '#fff'
                    }}>
                        Total Work Experience - {this.gettimeDuration(this.props.userdata.firstJobStartingdate)}
                        <div color='#789ff3'> Relevant Experience -
                        <ul>
                                <li>iOS - 6+ yrs</li>
                                <li>React Native  - 1+ yrs</li>
                                <li>React JS  - 1+ yrs</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{
                        margin: 80, flexDirection: 'column',
                        display: 'flex'
                    }}> Companies List  -
                        <div>
                            <ul>
                                <li><u>{this.props.userdata.currentCompanydetails.companyname}</u> -
                                        <i>{this.props.userdata.currentCompanydetails.JoiningYear} </i>
                                </li>
                                <li>
                                    <u>{this.props.userdata.secondCompanydetails.companyname}</u> -
                                <i>{this.props.userdata.secondCompanydetails.JoiningYear} </i>
                                </li>
                                <li>
                                    <u>{this.props.userdata.firstCompanydetails.companyname}</u> -
                                <i>{this.props.userdata.firstCompanydetails.JoiningYear}</i>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{marginLeft:40}}>
                    Roles & Responsibilities-
                    {
                        this.props.userdata.currentCompanydetails.rolesandResponsibilty.map((value, index) => {
                            return (
                                <li key={index}>{value}
                                </li>
                            )
                        })
                    }
                </div>


            </div>
        )
    }
}
export default Experience;