import React, { Component } from 'react';
import '../App.css';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Portfolio from '../images/Portfolio.jpg';
import Game2048 from '../images/2048.jpg';

class Projects extends Component {
	render() {
		return (
			<div className="projects">
				<div className="projects-grid">
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<img src={Portfolio} alt="" />

						<CardText style={{ fontFamily: 'Avenir' }}>
							Raul's portfolio is a website where you can find out who I am and know more about my
							academic background and my work experience.
						</CardText>
						<CardActions border>
							<Button colored>
								<a href="https://github.com/raulvillora/portfolio/" style={{ fontFamily: 'Avenir' }}>
									GitHub Code
								</a>
							</Button>
							<Button colored>
								<a href="https://raulvillora.github.io/portfolio/" style={{ fontFamily: 'Avenir' }}>
									Live Project
								</a>
							</Button>
						</CardActions>
					</Card>
				</div>

				<div className="projects-grid">
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<img src={Game2048} alt="" />
						<CardText style={{ fontFamily: 'Avenir' }}>React version of the game 2048</CardText>
						<CardActions border>
							<Button colored>
								<a href="https://github.com/raulvillora/2048/" style={{ fontFamily: 'Avenir' }}>
									GitHub Code
								</a>
							</Button>
							<Button colored>
								<a href="https://raulvillora.github.io/2048/" style={{ fontFamily: 'Avenir' }}>
									Live Project
								</a>
							</Button>
						</CardActions>
					</Card>
				</div>
			</div>
		);
	}
}

export default Projects;
