import { colors, fontFamily, fontSize, margin, padding } from '../../constants/theme';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  confirmedText: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.xl,
    color: colors.dark,
    marginBottom: margin.l,
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
  buttonBack: {
    marginHorizontal: margin.xxl,
    marginTop: margin.xl,
  },
  cardTitle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.l,
    color: colors.secondary,
    marginVertical: margin.l,
    textAlign: 'center',
  },
});
