import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store, persister} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import RootComponent from './src/navigation/Stack';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <NavigationContainer>
          <RootComponent />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
