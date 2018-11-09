'use strict';
import React,{ Component } from 'react';
import { Footer, Nav, Home, About, Work, Edu, Skill, Project, Contact } from '../components';

class Main extends Component {

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <Home />
                <Nav />
                <About />
                <Work />
                <Edu />
                <Skill />
                <Project />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Main;