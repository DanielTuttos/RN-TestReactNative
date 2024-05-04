import {Image, StyleSheet, Text, View} from 'react-native';
import {Track} from '../../../domain/entities/tracks';
import {text} from '../../../config/theme/theme';

interface Props {
  track: Track;
}

export const TrackCard = ({track}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: track.image}} style={styles.image} />
      <View>
        <Text numberOfLines={1} style={[text.caption, {fontWeight: 'bold'}]}>
          {track.name}
        </Text>
        <Text numberOfLines={1} style={[text.caption]}>
          {track.artistName}
        </Text>
      </View>
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
    borderRadius: 10,
  },
});
