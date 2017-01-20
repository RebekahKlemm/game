import React from 'react'
import {} from '../actions/constants';

const initialState = {
    gameStore: [],
    repeat: true,
    characterState: 0

}


export default function (state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        // case ADD_USER:
        //     newState.allUsers = [...newState.allUsers, action.user];
        //     break;
        default:
            return state;
    }

    return newState;

}