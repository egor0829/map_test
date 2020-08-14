import React from 'react';
import './App.css';

import store from './redux/store'
import {Provider} from 'react-redux';
import authService from './services/authService';
import {setLocations} from './services/locationsService';
import {setMapObjectsTypes} from './services/mapObjectsTypesService';
import {allDataService} from './services/allDataService';
import {createLayerMap} from './services/layersService';

import {initMap} from './services/ymapsService';

import Loader from './components/Loader';

class App extends React.Component<{}, {}> {
  async componentDidMount() {
    await store.dispatch<any>(authService());
    await store.dispatch<any>(setLocations());
    await store.dispatch<any>(setMapObjectsTypes());
    await store.dispatch<any>(allDataService());
    await store.dispatch<any>(createLayerMap());
    await initMap();
  }

  render(){
    return (
      <Provider store={store}>
        <div id="map" style={{width: "600px", height: "400px"}}></div>
        <Loader/>
      </Provider>
    );
  }
}

export default App;
