import {colors, fontFamily, fontSize, margin, padding} from '../../constants/theme';

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: margin.l,
  },
  title: {
    fontFamily: fontFamily.black,
    fontSize: fontSize.xl,
    color: colors.light,
    textAlign: 'center',
  },
});
