import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return (
            <Grid>
                <cell col={4}>
                    <p>{this.props.startYear}-{this.props.endYear}</p>
                </cell>
                <cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                </cell>
            </Grid>
        )
    }
}

export default Experience;