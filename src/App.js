import {
  SafeAreaView,
  Text,
  View
} from 'react-native';

import React from 'react';
import StartGameScreen from './screens/start-game-screen';
import { styles } from './styles';

const App = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StartGameScreen/>
      </View>
      
    </SafeAreaView>
  );
};


export default App;
