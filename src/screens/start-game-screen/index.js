import {Button, Text, TextInput, View} from 'react-native';

import Card from '../../components/card';
import Header from '../../components/header';
import React from 'react';
import {styles} from './styles';

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      <Card>
        <Text style={styles.cardTitle}>Empezar juego</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Elija un número</Text>
          <TextInput
            style={styles.input}
            maxLength={2}
            placeholder="11"
            placeholderTextColor="#52528C"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button title="Limpiar" onPress={() => null} color="#52528C" />
          <Button title="Confirmar" onPress={() => null} color="#52528C" />
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;
