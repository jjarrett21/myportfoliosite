

import React from 'react'
import avatar from '../Images/James-avi.png'
import { Layout, Row, Col } from 'antd'

function LandingPage() {
    return (
        <div>
            <Row type="flex" align="middle" justify="center">
                <Col span={12} className="landing-grid">
                    <img
                        src={avatar}
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Software and Electrical Engineer</h1>

                        <hr />
                        <p>IOS Development | React | Java | JavaScript | SQL | Python | VHDL | C </p>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/jjarrett21/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/jjarrett21" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Twitter */}
                            <a href="https://twitter.com/__youngcreator" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                </Col>
            </Row>
        </div>
    )

}

export default LandingPage
