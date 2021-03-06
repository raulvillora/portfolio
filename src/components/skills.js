import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

export default class Skills extends Component {
	render() {
		return (
			<Grid>
				<Cell col={12}>
					<div className="textStyle">
						{this.props.skill}{' '}
						<ProgressBar style={{ margin: 'auto', width: '70%' }} progress={this.props.progress} />{' '}
					</div>
				</Cell>
			</Grid>
		);
	}
}