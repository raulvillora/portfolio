import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import LandingPage from './components/landingpage';
import Resume from './components/resume';
import AboutMe from './components/aboutme';
import Contact from './components/contact';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            landingPage_hidden: false,
            resume_hidden: true,
            about_me_hidden: true,
            contact_hidden: true
        }
        this.handleLandingPageClick = this
            .handleLandingPageClick
            .bind(this);
        this.handleResumeClick = this
            .handleResumeClick
            .bind(this);
        this.handleAboutMeClick = this
            .handleAboutMeClick
            .bind(this);
        this.handleContactClick = this
            .handleContactClick
            .bind(this);
    }

    handleLandingPageClick() {
        this.setState({
            landingPage_hidden: false, 
            resume_hidden: true,
            about_me_hidden: true,
            contact_hidden: true
        });
    }

    handleResumeClick() {
        this.setState({
            landingPage_hidden: true, 
            resume_hidden: false,
            about_me_hidden: true,
            contact_hidden: true
        });
    }

    handleAboutMeClick() {
        this.setState({
            landingPage_hidden: true, 
            resume_hidden: true,
            about_me_hidden: false,
            contact_hidden: true
        });
    }

    handleContactClick() {
        this.setState({
            landingPage_hidden: true, 
            resume_hidden: true,
            about_me_hidden: true,
            contact_hidden: false
        });
    }

    render() {
        return (
            <Layout>
                <Header className="header-color" title={<div style={{ textDecoration: 'none', color: 'white' }} onClick={this.handleLandingPageClick}>Portfolio</div>} scroll>
                    <Navigation>
                        <div style={{ fontSize: '19px' }} onClick={this.handleResumeClick}>Resume</div>
                        <div style={{ fontSize: '19px' }} onClick={this.handleAboutMeClick}>Who I am</div>
                        <div style={{ fontSize: '19px' }} onClick={this.handleContactClick}>Contact</div>
                    </Navigation>
                </Header>
                <Drawer title={<div style={{ textDecoration: 'none', color: 'black' }} onClick={this.handleLandingPageClick}>Portfolio</div>}>
                    <Navigation>
                        <div style={{ fontSize: '19px' }} onClick={this.handleResumeClick}>Resume</div>
                        <div style={{ fontSize: '19px' }} onClick={this.handleAboutMeClick}>Who I am</div>
                        <div style={{ fontSize: '19px' }} onClick={this.handleContactClick}>Contact</div>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="App">
                        <div hidden={this.state.landingPage_hidden}>
                            <LandingPage />
                        </div>
                        <div hidden={this.state.resume_hidden}>
                            <Resume />
                        </div>
                        <div hidden={this.state.about_me_hidden}>
                            <AboutMe />
                        </div>
                        <div hidden={this.state.contact_hidden}>
                            <Contact />
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }
}