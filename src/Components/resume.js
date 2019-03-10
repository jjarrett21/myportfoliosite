import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../Images/James-avi.png'
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={avatar}
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>James Jarrett</h2>
                        <h4 style={{ color: 'grey' }}>Software Engineer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Focused on edge technologies as well as becoming the true definition of a full stack developer. I have a passion for growing by experience and passing that knowledge to others. </p>
                        <h5>Location</h5>
                        <p>Dallas, TX</p>
                        <h5>Phone</h5>
                        <p>913-999-3433</p>
                        <h5>Email</h5>
                        <p>jjarrett@skyylife.io</p>
                        <h5>Web</h5>
                        <p>jjarrett.tech</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2011}
                            endYear={2017}
                            schoolName="Oklahoma State University"
                            schoolDescription="I graduated May of 2017 with a degree in Electrical and Electronics Engineering Technology"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2017}
                            endYear={2019}
                            jobName="Electronic Transaction Consultants"
                            jobTitle="Application Developer I"
                            jobDescription="ETC is a technology company based in the toll industry, here I worked as an Application Developer focusing in java, javascript, and some python."
                        />

                        <Experience
                            startYear={2019}
                            endYear={0}
                            jobTitle="Front End Engineer"
                            jobName="Hyper Giant Sensory Sciences"
                            jobDescription="Hyper Giant is a startup focusing in artifical intelligence based video analytics."

                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Swift/IOS Development"
                            progress={75}
                        />
                        <Skills
                            skill="Javascript"
                            progress={80}
                        />
                        <Skills
                            skill="React"
                            progress={80}
                        />
                        <Skills
                            skill="Java"
                            progress={70}
                        />
                        <Skills
                            skill="Python"
                            progress={70}
                        />
                        <Skills
                            skill="VHDL"
                            progress={60}
                        />
                        <Skills
                            skill="C"
                            progress={60}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;