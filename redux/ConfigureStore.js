import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { campsites } from './campsitesReducer';
import { comments } from './commentsReducer';
import { partners } from "./partnersReducer";
import { promotions } from "./promotionsReducer";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: campsites,
            partners: partners,
            comments: comments,
            promotions: promotions
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}