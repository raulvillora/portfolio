import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import BigPicture from '../images/BigPicture.jpg';
import Explorer from '../images/Explorer.jpg';
import Volunt from '../images/Volunt.jpg';
import Flexible from '../images/Flexible.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <Grid>
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

              
            </div>
          </div>

          <div className="theContainer">
            <div className="banner-text-about-me">
              <h2>I AM AN AUTHENTIC EXPLORER</h2>
              <div className="wprBody">
                <div className="column" >
                  <p>I love adventure; it fuels my goals and aspirations in life. An adventurous person must be open-minded and forget all that could go wrong and all those things which are stopping from going even further.

  I have the heart of lifelong learning person. I have a mind hunger of curiosity about science, innovation and everything related to progress. I see work as an adventure where learning is the only path to go through it. From my point of view, joining companies on their journey is always exciting without mattering in which point of their journey they are.</p>
                </div>
                <div className="column">
                  <img
                    src={Explorer}
                    alt="Image1"
                  />
                </div>
              </div>

              
            </div>
          </div>

          <div className="theContainer">
            <div className="banner-text-about-me">
              <h2>I AM SELFLESS</h2>
              <div className="wprBody">
                <div className="column" >
                  <p>I am genuinely concern about other people well-being, and it has been one of the primary reasons which have driven me to work as a volunteer in several occasions for different organizations but all of them with the same simple goal of making this world a better one.
                    Volunteering has given me the opportunity to explore my limits and go beyond them, to break the shackles of routine life and to boost up my interpersonal skills.</p>
                </div>
                <div className="column">
                  <img
                    src={Volunt}
                    alt="Image2"
                  />
                </div>
              </div>

              
            </div>
          </div>

          <div className="theContainer">
            <div className="banner-text-about-me">
              <h2>I AM FLEXIBLE</h2>
              <div className="wprBody">
                <div className="column" >
                  <p>Nothing lasts forever but the certainty of change. Over the years, I’ve learnt to live with that fact. And not only live with it – I’ve learnt to enjoy it, embrace it, work with it.
                  Titles have never defined or restricted me. No task is too big or small – as long as the job gets done. What I don’t know, I learn it. I am flexible.</p>
                </div>
                <div className="column">
                  <img
                    src={Flexible}
                    alt="Image3"
                  />
                </div>
              </div>

              
            </div>
          </div>
        </Grid>
      </div>
    )
  }
}