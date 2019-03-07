import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import avatar from '../Images/James-avi.png'

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}> 
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src= {avatar}
                        alt="avatar"
                        className="avatar-img"
                        />

                    <div className="banner-text"> 
                        <h1>Software and Electrical Engineer</h1>

                        <hr/>
                        <p>IOS Development | React | Java | JavaScript | SQL | Python | VHDL | C </p>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/jjarrett21/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/jjarrett21" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>

                            {/* Twitter */}
                            <a href="https://twitter.com/__youngcreator" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-twitter-square"  aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;