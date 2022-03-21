import { colors, fontSize, margin, padding } from '../../constants/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        /* flex: 1,
        flexGrow: 0.25, */
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#52528C',
    },
    title: {
        fontFamily: 'Montserrat-Black',
        fontSize: 30,
        /* fontWeight: 'bold', */
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    }
})