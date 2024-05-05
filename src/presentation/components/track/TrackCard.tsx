import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Track} from '../../../domain/entities/tracks';
import {colors, text} from '../../../config/theme/theme';

interface Props {
  track: Track;
  isFavoriteButton?: boolean;
  inFavorites?: boolean;
  onPressFavorite?: () => void;
}

export const TrackCard = ({
  track,
  isFavoriteButton = false,
  inFavorites = false,
  onPressFavorite = undefined,
}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            track.image ||
            'https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png',
        }}
        style={styles.image}
      />
      <View>
        <Text numberOfLines={1} style={[text.caption, {fontWeight: 'bold'}]}>
          {track.name}
        </Text>
        <Text numberOfLines={1} style={[text.caption]}>
          {track.artistName}
        </Text>
      </View>
      {isFavoriteButton && (
        <Pressable style={styles.buttonFavorites} onPress={onPressFavorite}>
          <Image
            source={
              inFavorites
                ? require('../../../assets/favorite-on.png')
                : require('../../../assets/favorite-off.png')
            }
            style={{width: 25, height: 25}}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    width: 159,
    gap: 8,
    paddingBottom: 10,
  },
  image: {
    width: 159,
    height: 159,
    borderRadius: 20,
  },
  buttonFavorites: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: colors.primaryBackground,
    position: 'absolute',
    bottom: 53,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
