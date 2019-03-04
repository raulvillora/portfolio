import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-col" col={8}>
            <h2>SKILLS</h2>
            <Skills
              skill="Java"
              progress={85}
            />
            <Skills
              skill="React"
              progress={70}
            />
            <Skills
              skill="JS"
              progress={80}
            />
            <Skills
              skill="HTML5"
              progress={70}
            />
            <Skills
              skill="CSS3"
              progress={70}
            />
            <Skills
              skill="GCP"
              progress={70}
            />

            <Skills
              skill="Bash"
              progress={60}
            />

            <Skills
              skill="C"
              progress={60}
            />
            <hr style={{ borderTop: '5px solid #e22947' }} />
            <h2>ADVENTURES</h2>
            <Experience
              startYear={2017}
              endYear={2017}
              jobName="Laboratory of Artificial Intelligence UPM, Madrid"
              jobDescription="I joined a project with the aim to reduce the inability to reproduce the results of biological research which has been the elephant in the room for years. In that project, I collaborated in the creation of an end-to-end solution for the automation of biological protocols (BioBlocks) by designing and creating new features and full-documenting the project."
            />
            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Scientific EdTech, Lund"
              jobDescription="I collaborated and become part of team to digitalize the Swedish National Test of Autumn Mathematics for pupils in the first grade of Primary Education. At Scientic EdTech I learned the entire process of creating a product by creating it from scratch."
            />
            <hr style={{ borderTop: '5px solid #e22947' }} />
            <h2>EDUCATION</h2>
            <Education
              startYear={2013}
              endYear={2019}
              schoolName="Technical University of Madrid"
              schoolDescription=""
            />
            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Linköping University"
              schoolDescription="To carry out the Final Project at a university abroad, I joined the Erasmus+ mobility programme, which allowed me to study the project at Linköping University and develop it through an internship."
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;