import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
        
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>

          <h2>Raúl Villora Valencia</h2>
            <img
              src={require('./me.png')}
              alt="avatar"
              style={{height: '350px'}}
               />
             {/* <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>A diligent student who enjoys solving problems, embracing new challenges, learning innovative technologies, and exploring new fields to enrich his knowledge. Excellent critical thinking and analytical skills, with a record of accomplishment of being able to collaborate with others. Proven experience in developing web applications.</p> */}
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

          <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Avenir'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +34 658128519
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Avenir'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    r.vvalencia@alumnos.upm.es
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;