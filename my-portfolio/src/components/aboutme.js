import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import I1 from '../images/I1.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-col" col={8}>
            <div className="banner-text-about-me">
              <h2>I AM AN AUTHENTIC EXPLORER</h2>
              <div className="wprBody">
                <div className="wprBodyLeft">
                  <p>I love adventure; it fuels my goals and aspirations in life. An adventurous person must be open-minded and forget all that could go wrong and all those things which are stopping from going even further. 
                    
                    I have the heart of lifelong learning person. I have a mind hunger of curiosity about science, innovation and everything related to progress. I see work as an adventure where learning is the only path to go through it. From my point of view, joining companies on their journey is always exciting without mattering in which point of their journey they are.</p>
                </div>
                <div className="wprBodyRigth">
                  <img
                    src={I1}
                    alt="Image1"
                    height= "99%"
                    width="98%"
                  />
                </div>
              </div>
              <hr />

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}