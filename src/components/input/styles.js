import { colors, fontSize, margin, padding } from '../../constants/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        height: 100,
        marginVertical: margin.m,
    },
    input: {
        borderBottomColor: '#52528C',
        borderBottomWidth: 1,
        color: '#52528C',
        marginVertical: 10,
        fontSize: 30,
        alignSelf: 'center',
    },
})