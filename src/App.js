import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View
} from 'react-native';

import GameScreen from './screens/game-screen';
import StartGameScreen from './screens/start-game-screen';
import { styles } from './styles';

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={handleStartGame}/>

  if (userNumber) {
    content = <GameScreen userOptions={userNumber}/>
  }
  
  
  return (
    <SafeAreaView style={styles.container}>
      {content}
    </SafeAreaView>
  );
};


export default App;
