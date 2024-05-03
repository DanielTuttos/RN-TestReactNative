import {createStackNavigator} from '@react-navigation/stack';
import {DetailScreen, HomeScreen, ProfileScreen} from '../screens';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: {idTrack: string};
  ProfileScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
