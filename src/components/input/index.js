import { TextInput, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const Input = ({ handleOnChange, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        onChangeText={handleOnChange}
      />
    </View>
  );
};

export default Input;
