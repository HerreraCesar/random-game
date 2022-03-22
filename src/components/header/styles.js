import {colors, fontFamily, fontSize, margin, padding} from '../../constants/theme';

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamily.black,
    fontSize: fontSize.xl,
    color: colors.light,
    textAlign: 'center',
  },
});
