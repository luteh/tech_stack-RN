/**
 * Created by Luteh on 12/06/2017.
 */
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'react';
import reducers from './reducers';

const App = () => {
    <Provider store={createStore(reducers)}>
        <View/>
    </Provider>

}

export default App;