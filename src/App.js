import React, {useState} from 'react';

import GameScreen from './screens/game-screen';
import {SafeAreaView} from 'react-native';
import StartGameScreen from './screens/start-game-screen';
import {styles} from './styles';

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const handleReturn = () => {
    setUserNumber('');
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber) {
    content = <GameScreen userOptions={userNumber} handleReturn={handleReturn}/>;
  }

  return <SafeAreaView style={styles.container}>{content}</SafeAreaView>;
};

export default App;
