import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';

import Card from '../../components/card';
import Header from '../../components/header';
import random from 'random';
import {styles} from './styles';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = random.int((min = min), (max = max));
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({userOptions, handleReturn}) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 99, userOptions),
  );

  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      <Card>
        <Text style={styles.cardTitle}>La suposición del oponente es</Text>
        <Text style={styles.confirmedText}>{currentGuess}</Text>
        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <Button title="Menor" onPress={() => null} color="#9E183F" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Mayor" onPress={() => null} color="#9E183F" />
          </View>
        </View>
      </Card>
      <View style={styles.buttonBack}>
        <Button title="Volver" onPress={() => handleReturn()} color="#9E183F" />
      </View>
    </View>
  );
};

export default GameScreen;
