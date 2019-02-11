import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p className="textStyle">{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 className="textJob">{this.props.jobName}</h4>
          <p className="textStyle">{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}