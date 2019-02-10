import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require('./me.png')}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Graduate in</h1>
              <h1>Mathematics and Computer Science</h1>

            <hr/>

          <p>SKILLS React | JavaScript | GCP | AWS | </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="www.linkedin.com/in/raul-villora-valencia" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/raulvillora" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;