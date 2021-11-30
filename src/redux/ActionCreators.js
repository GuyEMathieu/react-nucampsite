import * as ActionTypes from './ActionTypes';

export const addComment = (campsideId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {  campsideId, rating, author, text }
})