import { colors, fontFamily, fontSize, margin, padding } from '../../constants/theme';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.xl,
    color: colors.secondary,
    borderBottomColor: colors.dark,
    borderBottomWidth: 1,
    marginVertical: margin.s,
    alignSelf: 'center',
    textAlign: 'center'
  },
});
