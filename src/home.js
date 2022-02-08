import React, { Component, Suspense } from 'react'
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import userdata from '../userdata.json';

// import Skills from './skills';
import Experience from './experience';
import Services from './services';

import Contact from './contact';

import ReactGA from 'react-ga';

import TinTinIcon from '../assets/Tintin-icon.svg'
ReactGA.initialize('UA-136327063-1');

const Skills = React.lazy(() => import('./skills'));



class Baseclass extends Component {
    constructor(props) {
        super(props);
        // console.log(userdata.Home);
        this.state = {
            userdata: userdata
        };
    }
    componentDidMount() {
        // super.componentDidMount();
        // alert(userdata.Home.title);
        ReactGA.initialize('UA-136327063-1');
        ReactGA.pageview('/Home');

    }


    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <div>
                    <AppBar position="fixed" color="default"
                    >
                        <Toolbar
                            style={{
                                // flex: 1,
                                justifyContent: 'flex-end',
                                flexDirection: 'row',
                                alignItems: 'center',
                                alignContent: 'center'
                            }}>
                            <Typography variant="subtitle1" color="inherit" style={{ flexGrow: 1 }}>
                                {this.state.userdata.Home.UserName}
                            </Typography>

                            <div style={{ display: 'block' }}>
                                <Link href='#home' style={{ margin: 5 }} >
                                    Home
                                </Link>


                                <Link href='#skills' style={{ margin: 5 }} >
                                    Skills
                                </Link>


                                <Link href='#workexperience' style={{ margin: 5 }} >
                                    Work Experience
                                </Link>


                                <Link href='#services' style={{ margin: 5 }} >
                                    Services
                                </Link>


                                <Link href='#contact' style={{ margin: 5 }} >
                                    Contact
                                </Link>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
                <Toolbar />

                <div id='home' style={{
                    width: '98vw', height: '50vh', backgroundColor: 'white',
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
                }}
                >
                    <TinTinIcon width={150} height={150} />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>

                        <Typography variant="subtitle1" gutterBottom>

                            {this.state.userdata.Home.title}
                        </Typography>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                        <Typography variant="subtitle2" gutterBottom>
                            {this.state.userdata.Home.Subtitle}
                        </Typography>
                    </div>
                </div>

                <div id='skills' style={{
                    width: '98vw', backgroundColor: 'white',
                    display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 0
                }}>
                    {/* <Skills userdata={this.state.userdata.Skills}></Skills> */}


                    <Suspense fallback={<div>Loading...</div>}>
                        <Skills userdata={this.state.userdata.Skills}></Skills>
                    </Suspense>

                </div>

                <div id='workexperience' style={{
                    width: '98vw', backgroundColor: 'transparent',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 0,
                    flexDirection: 'row'
                }}>
                    <Experience userdata={this.state.userdata.WorkExperience}></Experience>
                </div>
                <div id='services' style={{
                    width: '98vw', backgroundColor: 'transparent',
                    display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', margin: 20
                }}>
                    <Services userdata={this.state.userdata}> </Services>
                </div>

                <div id='contact' style={{
                    width: '98vw', height: '50vh', backgroundColor: 'white',
                    display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 0
                }}>
                    <Contact userdata={this.state.userdata.Contact}></Contact>
                </div>

            </div>
        );
    }
}

export default Baseclass;