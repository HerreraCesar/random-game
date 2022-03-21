import { Button, Text, View } from 'react-native'
import React, { useState } from 'react'

import Card from '../../components/card'
import Header from '../../components/header'
import random from 'random'
import { styles } from './styles'

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = random.int((min = min), (max = max))
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

const GameScreen = ({ userOptions }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 99, 20))

    

  return (
    <View style={styles.container}>
        <Header title='Adivina el número'/>
        <Card>
            <Text style={styles.cardTitle}>La suposición del oponente es</Text>
            <Text style={styles.confirmedText}>{currentGuess}</Text>
            <View style={styles.buttonsContainer}>
                <Button title='Menor' onPress={ () => null} />
                <Button title='Mayor' onPress={ () => null} />
            </View>
        </Card>
    </View>
  )
}

export default GameScreen