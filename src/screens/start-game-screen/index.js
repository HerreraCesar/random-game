import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

import Card from '../../components/card';
import Header from '../../components/header';
import Input from '../../components/input';
import {colors} from '../../constants/theme';
import {styles} from './styles';

const StartGameScreen = ({onStartGame}) => {
  const [inputValue, setInputValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleOnChange = text => {
    setInputValue(text.replace(/[^0-9]/g, ''));
  };

  const handleResetInput = () => {
    setInputValue('');
    setConfirmed(false);
  };

  const handleConfirmInput = () => {
    const chosenNumber = parseInt(inputValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setInputValue('');
  };

  const confirmedOutput = confirmed ? (
    <Card>
      <Text style={styles.cardTitle}>Tu Selección</Text>
      <Text style={styles.confirmedText}>{selectedNumber}</Text>
      <Button
        title="¡JUGAR!"
        onPress={() => onStartGame(selectedNumber)}
        color="#9E183F"
      />
    </Card>
  ) : null;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Header title="Adivina el número" />
          <Card>
            <Text style={styles.cardTitle}>Empezar juego</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Elija un número</Text>
              <Input
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                maxLength={2}
                placeholder="Ej: 11"
                placeholderTextColor={colors.placeholder}
                handleOnChange={value => handleOnChange(value)}
                returnKeyType="done"
                value={inputValue}
              />
            </View>
            <View style={styles.buttons}>
              <View style={styles.buttonContainer}>
                <Button
                  title="Limpiar"
                  onPress={() => handleResetInput()}
                  color="#9E183F"
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Confirmar"
                  onPress={() => {
                    handleConfirmInput();
                    Keyboard.dismiss();
                  }}
                  color="#9E183F"
                />
              </View>
            </View>
          </Card>
          {confirmedOutput}
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
