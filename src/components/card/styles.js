import { colors, fontFamily, fontSize, margin, padding } from '../../constants/theme';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    marginHorizontal: margin.l,
    marginBottom: margin.l,
    backgroundColor: colors.light,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.4,
    elevation: 2,
    justifyContent: 'center',
    borderRadius: 5,
  },
});
