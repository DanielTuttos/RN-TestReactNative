import {createStackNavigator} from '@react-navigation/stack';
import {
  DetailScreen,
  FavoritesScreen,
  HomeScreen,
  ProfileScreen,
} from '../screens';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: {idTrack: string};
  ProfileScreen: undefined;
  FavoritesScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};
