import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import BigPicture from '../images/BigPicture.jpg';
// import Explorer from '../images/Explorer.jpg';
// import Volunt from '../images/Volunt.jpg';
// import Flexible from '../images/Flexible.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          {/* <Cell className="resume-col" col={8}> */}
          <div className="theContainer">
            <div className="banner-text-about-me">
              <h2>THE BIG PICTURE</h2>
              <div className="wprBody">
                <div className="column" >
                  <p>I am a self-taught person who, after discovering his passion for science, has not stopped learning modern technologies and exploring new fields to satisfy his curiosity and enrich his knowledge.

                  I know that a better and sustainable future is possible through the development of innovative technologies and ideas, and I want to be part of that transformation process.</p>
                </div>
                <div className="column">
                  <img
                    src={BigPicture}
                    alt="Image0"
                  />
                </div>
              </div>
               
              <hr />
            </div>
            </div>
            <br></br>

           {/* </Cell> */}
        </Grid>
      </div>
    )
  }
}