import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#212121',
    },
    inputContainer: {
        flex: 1,
        flexGrow: 0.6,
        marginHorizontal: 20,
    },
    input: {
        borderBottomColor: '#52528C',
        borderBottomWidth: 1,
        color: '#52528C',
        marginVertical: 10,
        fontSize: 30,
        alignSelf: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121',
        marginBottom: 5,
        marginTop: 10,
        justifyContent:'center',
        alignSelf: 'center',
    },
    buttonsContainer: {
        flex: 1,
        flexGrow: 0.18,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 20,
        marginBottom: 10,
    }
})