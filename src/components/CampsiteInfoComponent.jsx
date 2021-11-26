import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Button, Modal, ModalBody, Row, Col, Label, ModalHeader } from 'reactstrap';

import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
// const validEmail = (val) =>
//     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

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

        this.handleComment = this.handleComment.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    handleComment() {
        console.info("Current State is", this.state.newRating)
        alert("Current state is: ", this.state.newRating);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            newRating: {...this.state.newRating, [name]: value}
        })
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.isModalOpen}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleComment}>
                            <div className="form-group">
                                <Label htmlFor="rating" md={2}>
                                    Rating
                                </Label>
                                <Control.select
                                    className="form-control"
                                    model=".rating"
                                    id="rating"
                                    name="rating"
                                    onChange={this.handleChange}
                                    value={this.state.newRating.rating}
                                    className="form-control"
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author" md={2}>
                                    Author
                                </Label>
                                <Control.text
                                    className="form-control"
                                    model=".author"
                                    id="author"
                                    name="author"
                                    placeholder="Author"
                                    onChange={this.handleChange}
                                    value={this.state.newRating.author}
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
                                <Label htmlFor="text" md={2}>
                                    Text
                                </Label>
                                <Control.textarea
                                    model=".text"
                                    id="text"
                                    name="text"
                                    onChange={this.handleChange}
                                    value={this.state.newRating.text}
                                    className="form-control"
                                    rows={6}
                                    placeholder="Comment"
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

function renderComments(comments) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map((c) => (
                    <p>
                        {c.text} <br /> --{c.author} {formatDate(c.date)}
                    </p>
                ))}
                <CommentForm />
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

function renderCampsite(campsite) {
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
                    {renderCampsite(props.campsite)}
                    {renderComments(props.comments)}
                </div>
            </div>
        );
    }

    return <div />;
}

export default CampsiteInfo;
