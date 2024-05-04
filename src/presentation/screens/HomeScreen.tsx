import {ActivityIndicator, FlatList, Pressable, Text, View} from 'react-native';
import {MainScreen, TrackCard} from '../components';
import {Country, useTracksStore} from '../store/tracksStore';
import {useEffect} from 'react';
import {text} from '../../config/theme/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigator/StackNavigator';

export const HomeScreen = () => {
  const {getTracksCountry, tracksCountry} = useTracksStore();

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    getTracksCountry();
  }, []);

  return (
    <MainScreen textHeader="Playlists">
      {Object.keys(tracksCountry).map((key, index) => (
        <View key={key + index}>
          <Text style={[text.h2, {paddingVertical: 10}]}>
            Top musics {key.toLocaleUpperCase()}
          </Text>
          {tracksCountry[key as keyof Country].length === 0 ? (
            <ActivityIndicator style={{height: 170}} />
          ) : (
            <FlatList
              keyExtractor={item => item.id}
              key={key}
              data={tracksCountry[key as keyof Country]}
              renderItem={({item}) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate('DetailScreen', {idTrack: item.id})
                  }>
                  <TrackCard track={item} />
                </Pressable>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      ))}
    </MainScreen>
  );
};
