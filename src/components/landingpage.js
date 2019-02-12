import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Me from '../images/Me.jpg';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Me}
              alt="avatar"
              style={{
                height: '250px',
              }}
            />

            <div className="banner-text">
              <h2>Graduate in</h2>
              <h1>Mathematics and Computer Science</h1>
              <hr />

              <p>Java | React | JavaScript | HTML5 | CSS3 | GCP | Bash | C </p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/raul-villora-valencia" rel="noopener noreferrer" target="_blank">
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