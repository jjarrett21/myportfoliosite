import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skills';


class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img 
                        src= {avatar}
                        alt="avatar"
                        style={{height: '200px'}}
                        />
                        </div>
                    </cell>
                </Grid>
            </div>

        <h2 style={{paddingTop: '2em'}}>James Jarrett</h2>
        <h4 style={{color: 'grey'}}>Engineer</h4>
        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
        <p>Will edit this later</p>
        
        )

    }
}

export default Resume;