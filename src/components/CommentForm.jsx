import React, { Component } from 'react'
import { Button, Modal, ModalBody,
    Row, Col, Label
 } from 'reactstrap'

 import { Control, LocalForm, Errors } from 'react-redux-form';
import ModalHeader from 'reactstrap/lib/ModalHeader';


export class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: props.isModalOpen
        }
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.isModalOpen}>
                    <ModalHeader>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Control.select 
                                    className='form-control'
                                    model='.rating' id='rating' name='rating'
                                    className='form-control'>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                </Control.select>
                                <Errors
                                    className="text-danger"
                                    model=".rating"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author" md={2}>Author</Label>
                                <Control.text
                                    className='form-control'
                                    model=".author" id="author" name="author"
                                    placeholder="Author"
                                    className="form-control"
                                    validators={{
                                        // required, 
                                        // minLength: minLength(2),
                                        // maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="text" md={2}>Text</Label>
                                    <Control.textarea 
                                        model=".text" id="text" name="text"
                                        className='form-control' rows={6}
                                        placeholder="Text"
                                        className="form-control"
                                        validators={{
                                            // required, 
                                            // minLength: minLength(2),
                                            // maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".text"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                            </div>
                            <div className="form-group">
                                <Button type="submit" color="primary">
                                    Submit Comment
                                </Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                <Button outline><i className="fa fa-pencil fa-lg" /> Submit Comment</Button>
            </div>
        )
    }
}

export default CommentForm
