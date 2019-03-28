import { Store, createStore } from 'redux';
import { IAppState } from './state';
import { rootReducer } from './reducer';
import middlewares from './middlewares';

export const store: Store<IAppState> = createStore(
    rootReducer,
    middlewares
);