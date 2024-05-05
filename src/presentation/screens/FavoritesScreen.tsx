import {Pressable, View} from 'react-native';
import {MainScreen, TrackCard} from '../components';
import {FlatList} from 'react-native-gesture-handler';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';
import {useTracksStore} from '../store/tracksStore';

interface Props extends StackScreenProps<RootStackParams, 'FavoritesScreen'> {}

export const FavoritesScreen = ({navigation}: Props) => {
  const {addFavorites, favorites = []} = useTracksStore();

  return (
    <MainScreen
      withScroll={false}
      textHeader="Favorites"
      header="withBack"
      onPressBack={() => navigation.goBack()}>
      <FlatList
        numColumns={2}
        data={favorites}
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
      <View style={{height: 70}} />
    </MainScreen>
  );
};
