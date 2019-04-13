import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import ReactGA from 'react-ga';


class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        ReactGA.pageview('/Contact');

    }

    openlink(param) {
        // window.open('http://google.com','_blank');
        switch (param) {
            case 1: {
                //window.alert('message');
                //alert(this.props.data.Contact.github);
                ReactGA.event({
                    category: 'github',
                    action: 'User Open github homepage'
                });
                window.open(this.props.userdata.github, '_blank');
                //console.log(this.props.data.Contact.github);
            }
                break;

            case 2: {
                ReactGA.event({
                    category: 'linkedin',
                    action: 'User Open linkedin'
                });
                window.open(this.props.userdata.linkedin, '_blank');
            }
                break;

            case 3: {
                ReactGA.event({
                    category: 'mailid',
                    action: 'User Open mailid'
                });
                window.open(this.props.userdata.mailid, '_blank');
            }
                break;
            case 4: {
                ReactGA.event({
                    category: 'code',
                    action: 'User Open github code site'
                });
                window.open(this.props.userdata.code, '_blank');
            }
                break;
            case 5: {
                ReactGA.event({
                    category: 'CV',
                    action: 'User dwld CV'
                });
                window.open(this.props.userdata.cvdwld, '_blank');
            }
                break;
            case 6: {
                ReactGA.event({
                    category: 'Feedback',
                    action: 'User Gone to feedback github site'
                });
                window.open(this.props.userdata.githubissue, '_blank');
            }
                break;


            default: {

            }

        }
    }

    render() {
        return (
            <div style={{ marginTop: 80, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <AppBar position="relative" color="default" style={{ width: '90vw' }}
                >
                    <Toolbar
                        style={{
                            flex: 1,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Typography variant="subtitle1" color="inherit"  >
                            {this.props.userdata.title}
                        </Typography>


                        <div>
                            <Button style={{ margin: 10, fontSize: 10 }} variant="contained" color="default" onClick={() => { this.openlink(1) }} >
                                GitHub
                        </Button>


                            <Button style={{ margin: 10, fontSize: 10 }} variant="contained" color="default" onClick={() => { this.openlink(2) }} >
                                LinkedIN
                        </Button>

                            <Button style={{ margin: 10, fontSize: 10 }} variant="contained" color="default" onClick={() => { this.openlink(3) }} >
                                Mail
                        </Button>
                            <Button style={{ margin: 10, fontSize: 10 }} variant="contained" color="default" onClick={() => { this.openlink(4) }} >
                                Code
                        </Button>

                            <Button style={{ margin: 10, fontSize: 10 }} variant="contained" color="default" onClick={() => { this.openlink(5) }} >
                                Dwld CV
                        </Button>
                        </div>


                    </Toolbar>
                </AppBar>

                <Fab color="secondary" aria-label="Edit" style={{ margin: 20 }} onClick={() => { this.openlink(6) }} >
                    <Icon>edit_icon</Icon>
                </Fab>


            </div>
        )
    }
}
export default Contact;