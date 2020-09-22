import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { campsites } from './campsitesReducer';
import { comments } from './commentsReducer';
import { partners } from "./partnersReducer";
import { promotions } from "./promotionsReducer";
import { favorites } from "./favoritesReducer";
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const config = {
    key: 'root',
    storage,
    debug: true
}

export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, {
            campsites: campsites,
            partners: partners,
            comments: comments,
            promotions: promotions,
            favorites: favorites            
        }),
        applyMiddleware(thunk, logger)
    );

    const persistor = persistStore(store);

    return {persistor, store};
}