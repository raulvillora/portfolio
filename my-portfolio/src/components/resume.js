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
            <hr style={{ borderTop: '3px solid #e22947' }} />
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
              skill="Javascript"
              progress={80}
            />
            <Skills
              skill="HTML5/CSS3"
              progress={70}
            />
            <Skills
              skill="Google Cloud Platform"
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
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>ADVENTURES</h2>
            <Experience
              startYear={2017}
              endYear={2017}
              jobName="My First Adventure"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Experience
              startYear={2018}
              endYear={2018}
              jobName="My Second Adventure"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <h2>EDUCATION</h2>
            <Education
              startYear={2013}
              endYear={2019}
              schoolName="Technical University of Madrid"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Linköping University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;