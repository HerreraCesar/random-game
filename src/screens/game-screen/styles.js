import { colors, fontFamily, fontSize, margin, padding } from '../../constants/theme';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    marginBottom: margin.m,
    marginHorizontal: margin.m,
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    flex: 1,
    margin: margin.s,
  },
  cardTitle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.l,
    color: colors.secondary,
    marginVertical: margin.l,
    textAlign: 'center',
  },
  confirmedText: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.xl,
    color: colors.dark,
    marginBottom: margin.l,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
