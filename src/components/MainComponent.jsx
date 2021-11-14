import React, { Component } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'


//#region SHARED
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
//#endregion

//#region COMPONENTS
import Directory from './DirectoryComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
//#endregion

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS,
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }

    render() {
        const HomePage = () => {
            return (
                <Home 
                campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            )
        }
        return (
            <div>
                <Header  />
                <Routes>
                    <Route path='/home'element={<HomePage  />} />
                    <Route path='/contactus'element={<Contact  />} />
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