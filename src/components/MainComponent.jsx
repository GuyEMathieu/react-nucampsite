import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './HomeComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }

    render() {
        const HomePage = () => {
            return (
                <Home  />
            )
        }
        return (
            <div>
                <Header  />
                <Routes>
                    <Route path='/home'element={<HomePage  />} />
                    <Route path='/' element={<Navigate to='/home'  />} />
                    <Route path='/directory' render={() =>
                        <Directory campsites={this.state.campsites} />
                    }/>
                </Routes>
                <Footer  />              
            </div>
        );
    };
}

export default Main;