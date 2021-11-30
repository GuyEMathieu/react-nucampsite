import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Button, Modal, ModalBody, Row, Col, Label, ModalHeader } from 'reactstrap';

import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

export class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            newRating: {
                rating: 0,
                author: '',
                text: ""
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.campsiteId, values.rating, values.author, values.text)
        // console.log('Current state is: ' + JSON.stringify(values));
        //alert('Current state is: ' + JSON.stringify(values));
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.isModalOpen}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating">
                                    Rating
                                </Label>
                                <Control.select
                                    className="form-control"
                                    model=".rating"
                                    id="rating"
                                    name="rating"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author" >
                                    Your Name
                                </Label>
                                <Control.text
                                    className="form-control"
                                    model=".author"
                                    id="author"
                                    name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        minLength: minLength(2),
                                        maxLength: maxLength(15),
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength:
                                            'Must be at least 2 characters',
                                        maxLength:
                                            'Must be 15 characters or less',
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="text" >
                                    Comment
                                </Label>
                                <Control.textarea
                                    model=".text"
                                    id="text"
                                    name="text"
                                    className="form-control"
                                    rows={6}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <Button color="primary">Submit</Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                <Button
                    className="shadow-none"
                    outline
                    onClick={this.toggleModal}
                >
                    <i className="fa fa-pencil fa-lg" /> Submit Comment
                </Button>
            </div>
        );
    }
}



function RenderComments({ comments, addComment, campsiteId }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <p>{comment.text}<br />
                                --{comment.author}, {formatDate(comment.date)}
                            </p>
                        </div>
                    )
                })}
                <CommentForm
                    campsiteId={campsiteId}
                    addComment={addComment} />
            </div>
        );
    }
}

function formatDate(date) {
    if (date) {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        }).format(new Date(Date.parse(date)));
    }
}

function RenderCampsite({ campsite }) {
    if (campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardTitle>{campsite.description}</CardTitle>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments
                        campsiteId={props.campsite.id}
                        addComment={props.addComment}
                        comments={props.comments} />
                </div>
            </div>
        );
    }

    return <div />;
}

export default CampsiteInfo;
