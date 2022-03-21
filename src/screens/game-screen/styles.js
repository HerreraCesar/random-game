import { colors, fontSize, margin } from '../../constants/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        /* flex:1, */
    },
    confirmedText: {
        fontSize: fontSize.title,
        fontWeight: 'bold',
        color: colors.primary,
        justifyContent: 'center',
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
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: margin.l,
        color: colors.primaryTitle,
    },
})