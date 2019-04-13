import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';


class Contact extends React.Component {
    constructor(props) {
        super(props);
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
                            <Button style={{ margin: 10, fontSize: 10 }} variant="contained" color="default" onClick={() => { window.open(this.props.userdata.github) }} >
                                GitHub
                        </Button>


                            <Button style={{ margin: 10, fontSize: 10 }} variant="contained" color="default" onClick={() => { window.open(this.props.userdata.linkedin) }} >
                                LinkedIN
                        </Button>

                            <Button style={{ margin: 10, fontSize: 10 }} variant="contained" color="default" onClick={() => { window.open(this.props.userdata.mailid) }} >
                                Mail
                        </Button>
                            <Button style={{ margin: 10, fontSize: 10 }} variant="contained" color="default" onClick={() => { window.open(this.props.userdata.code) }} >
                                Code
                        </Button>

                            <Button style={{ margin: 10, fontSize: 10 }} variant="contained" color="default" onClick={() => { window.open(this.props.userdata.cvdwld) }} >
                                Dwld CV
                        </Button>
                        </div>


                    </Toolbar>
                </AppBar>

                <Fab color="secondary" aria-label="Edit" style={{ margin: 20 }} onClick={() => { window.open(this.props.userdata.githubissue) }} >
                    <Icon>edit_icon</Icon>
                </Fab>


            </div>
        )
    }
}
export default Contact;