import { Button, Image, Text, View } from 'react-native'

import Card from '../../components/card/index'
import React from 'react'
import { styles } from './styles'

const GameOverScreen = ({ rounds, choice, onRestart }) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/images/200.gif')}/>
        <Card style={styles.cardContainer}>
            <Text style={styles.confirmedText}>Intentos: {rounds}</Text>
            <Text style={styles.cardTitle}>¡{choice}!</Text>
        </Card>
        <View style={styles.buttonContainer}>
          <Button title='Reiniciar' onPress={onRestart} color="#9E183F"/>
        </View>
    </View>
  )
}

export default GameOverScreen