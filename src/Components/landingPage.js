import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}> 
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://vignette.wikia.nocookie.net/gundam/images/5/5e/Gundam_Exia_LOL.jpg/revision/latest?cb=20101019165531"
                        alt="avatar"
                        className="avatar-img"
                        />

                    <div className="banner-text"> 
                        <h1>Software Engineer</h1>

                        <hr/>
                        <p>IOS Development | React | Java | JavaScript | SQL | Python | VHDL | C </p>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>

                            {/* Twitter */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
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