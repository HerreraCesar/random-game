import {Alert, Button, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

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

const GameScreen = ({userOptions, onGameOver}) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 99, userOptions),
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(99);

  useEffect(() => {
    if (currentGuess === userOptions) onGameOver(rounds);
  }, [currentGuess, userOptions, onGameOver]);

  const handlerNextGuess = direction => {
    if (
      (direction === 'lower' && currentGuess < userOptions) ||
      (direction === 'greater' && currentGuess > userOptions)
    ) {
      Alert.alert(
        'No mientas...',
        'tu sabes que no es verdad', [{text: '¡Disculpa!', style: 'cancel'}],
      );
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setRounds(current => current +1)
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Adivina el número" />
      <Card>
        <Text style={styles.cardTitle}>La suposición del oponente es</Text>
        <Text style={styles.confirmedText}>{currentGuess}</Text>
        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <Button
              title="Menor"
              onPress={() => handlerNextGuess('lower')}
              color="#9E183F"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Mayor"
              onPress={() => handlerNextGuess('greater')}
              color="#9E183F"
            />
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};

export default GameScreen;
