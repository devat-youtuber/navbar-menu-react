import React, { Component } from 'react';
import Home from './section/Home';
import Blog from './section/Blog';
import Contact from './section/Contact';
import About from './section/About';
import Login from './section/Login';
import {Route} from 'react-router-dom';

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Home} exact />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
            </section>
        )
    }
}

export default Section
