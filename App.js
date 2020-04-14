import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/Main';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
