import { colors, fontSize, margin, padding } from '../../constants/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        height: 'auto'
        /* flex: 1, */
    },
    cardTitle: {
        fontSize: fontSize.title,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: margin.l,
        color: colors.primaryTitle,
    },
    inputContainer: {
        /* flex: 1, */
        /* flexGrow: 0.8, */
        marginHorizontal: 20,
    },
    label: {
        fontSize: 16,
        /* fontWeight: 'bold', */
        color: '#212121',
        /* marginBottom: 5, */
        /* marginTop: 10, */
        justifyContent:'center',
        alignSelf: 'center',
    },
    buttonsContainer: {
        /* flex: 1, */
        /* flexGrow: 0.18, */
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: margin.l,
        marginBottom: margin.l,
    },
    confirmedText: {
        fontSize: fontSize.title,
        fontWeight: 'bold',
        color: colors.primary,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    containerConfirmed: {
        marginVertical: margin.m,
        justifyContent: 'center'
    },
})