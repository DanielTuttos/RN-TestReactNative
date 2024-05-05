import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {MainScreen, TrackCard} from '../components';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';
import {useTracksStore} from '../store/tracksStore';
import {useEffect} from 'react';

interface Props extends StackScreenProps<RootStackParams, 'ProfileScreen'> {}

export const ProfileScreen = ({navigation}: Props) => {
  const {playedSongs, getPlayedSongs, addFavorites, favorites, getFavorites} =
    useTracksStore();

  useEffect(() => {
    getPlayedSongs();
    getFavorites();
  }, []);

  return (
    <MainScreen
      withScroll={false}
      textHeader="Profile"
      header="withBack"
      onPressBack={() => navigation.goBack()}>
      <FlatList
        numColumns={2}
        data={playedSongs}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('DetailScreen', {idTrack: item.id})
            }>
            <TrackCard
              track={item}
              isFavoriteButton
              onPressFavorite={() => addFavorites(item)}
              inFavorites={favorites.some(fav => fav.id === item.id)}
            />
          </Pressable>
        )}
        style={{height: '94%'}}
        showsVerticalScrollIndicator={false}
      />
      <Pressable
        onPress={() => navigation.navigate('FavoritesScreen')}
        style={styles.butonFAB}>
        <Image
          source={require('../../assets/favorite-on.png')}
          style={{width: 40, height: 40}}
        />
      </Pressable>
      <View style={{height: 70}} />
    </MainScreen>
  );
};

const styles = StyleSheet.create({
  butonFAB: {
    width: 50,
    height: 50,
    backgroundColor: '#95BAAD',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    right: 20,
  },
});
