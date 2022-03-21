import {colors, margin} from '../../constants/theme'

import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        /* flex: 1, */
    },
    card: {
        /* flex: 1, */
        /* flexGrow: 0.42, */
        justifyContent: 'center',
        marginHorizontal: margin.xxl,
        marginTop: margin.l,
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.4,
        elevation: 2,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
})