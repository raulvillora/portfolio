import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/portfolio">Portfolio</Link>} scroll>
                        <Navigation>
                            <Link style={{ fontSize: '19px' }} to="/resume">Resume</Link>
                            <Link style={{ fontSize: '19px' }} to="/aboutme">Who I am</Link>
                            {/* <Link to="/projects">Projects</Link> */}
                            <Link style={{ fontSize: '19px' }} to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/portfolio">Portfolio</Link>}>
                        <Navigation>
                            <Link style={{ fontSize: '19px' }} to="/resume">Resume</Link>
                            <Link style={{ fontSize: '19px' }} to="/aboutme">Who I am</Link>
                            {/* <Link to="/projects">Projects</Link> */}
                            <Link style={{ fontSize: '19px' }} to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <Main />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
