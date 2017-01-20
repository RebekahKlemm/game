import React from 'react';
import { combineReducers } from 'redux'
import users from './user-reducer';
import game from './game-reducer';



export default combineReducers({users, game});