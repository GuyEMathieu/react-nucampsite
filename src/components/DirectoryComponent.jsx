import React, {Component} from 'react'
import {
    Card, CardImg,CardImgOverlay,
    CardBody, CardTitle
} from 'reactstrap'

import CampsiteInfo from './CampsiteInfoComponent';
class Directory extends Component {
    constructor (props){
        super(props);
        this.state = {
            selectedCampsite: null
        };
    }

    // onCampsiteSelect(campsite) {
    //     this.setState({selectedCampsite: campsite});
    // }

    renderSelectedCampsite(campsite){
        if(campsite){
            return (
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardTitle>{campsite.description}</CardTitle>
                    </CardBody>
                    
                </Card>
            )
        }

        return <div />
    }

    render() {
        const directory =  this.props.campsites.map(campsite => {
            return (
                <div className="col-md-5 m-1" key={campsite.id}>
                    <Card onClick={() => this.props.onClick(campsite.id)}>
                        <CardImg width='100%' src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className="row">
                    {directory}
                </div>
                <CampsiteInfo  campsite={this.state.selectedCampsite}/>
            </div>
        );
    }
}

export default Directory;


