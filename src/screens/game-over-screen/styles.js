import { colors, fontFamily, fontSize, margin, padding } from '../../constants/theme';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  cardContainer: {
    marginTop: margin.l,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: margin.l,
  },
  cardTitle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.xl,
    color: colors.secondary,
    marginVertical: margin.l,
    textAlign: 'center',
  },
  confirmedText: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.m,
    color: colors.dark,
    marginTop: margin.l,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});