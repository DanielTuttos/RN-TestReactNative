import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {Text, View} from 'react-native';
import { StackNavigator } from './presentation/navigator/StackNavigator';

export const TestApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
