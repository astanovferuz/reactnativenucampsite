import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { campsites } from './campsitesReducer';
import { comments } from './commentsReducer';
import { partners } from "./partnersReducer";
import { promotions } from "./promotionsReducer";
import { favorites } from "./favoritesReducer";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: campsites,
            partners: partners,
            comments: comments,
            promotions: promotions,
            favorites: favorites            
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}