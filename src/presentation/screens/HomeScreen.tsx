import {FlatList, Pressable, Text} from 'react-native';
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
      {Object.keys(tracksCountry).map(key => (
        <>
          <Text style={[text.h2, {paddingVertical: 10}]}>
            Top musics {key.toLocaleUpperCase()}
          </Text>
          <FlatList
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
        </>
      ))}
    </MainScreen>
  );
};
