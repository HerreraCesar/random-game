import { colors, fontFamily, fontSize, margin, padding } from '../../constants/theme';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardTitle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.l,
    color: colors.secondary,
    marginVertical: margin.l,
    textAlign: 'center',
  },
  inputContainer: {
    marginHorizontal: margin.l,
  },
  label: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.m,
    color: colors.dark,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: margin.m,
    marginHorizontal: margin.m,
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    flex: 1,
    margin: 10,
  },
  confirmedText: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.xl,
    color: colors.dark,
    marginBottom: margin.l,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  containerConfirmed: {
    marginVertical: margin.m,
    justifyContent: 'center',
  },
});
