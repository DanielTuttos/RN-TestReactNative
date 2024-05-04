import {StyleProp, TextStyle} from 'react-native';

export const colors = {
  primaryBackground: '#414141',
  primaryTextColor: '#ffffff',
  secondaryBackground: '#717171',
  secondaryText: '#F2ECFF',
};

interface Letters {
  h1: TextStyle;
  h1Regular: TextStyle;
  h2: TextStyle;
  h2Regular: TextStyle;
  caption: TextStyle;
  info: TextStyle;
}

export const text: Letters = {
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: colors.primaryTextColor,
  },
  h1Regular: {
    fontSize: 30,
    fontFamily: 'Roboto',
    color: colors.primaryTextColor,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: colors.primaryTextColor,
  },
  h2Regular: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: colors.primaryTextColor,
  },
  caption: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: colors.primaryTextColor,
  },
  info: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: colors.primaryTextColor,
  },
};
