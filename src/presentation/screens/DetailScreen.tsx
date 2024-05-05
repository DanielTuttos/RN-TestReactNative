import {StackScreenProps} from '@react-navigation/stack';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {MainScreen} from '../components';
import {useTracksStore} from '../store/tracksStore';
import {useEffect} from 'react';
import {colors, text} from '../../config/theme/theme';
import RenderHTML from 'react-native-render-html';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({navigation, route}: Props) => {
  const {idTrack} = route.params;

  const {trackInfo, getTrackById, clearTrack} = useTracksStore();

  useEffect(() => {
    getTrackById(idTrack);
  }, []);

  return (
    <MainScreen
      textHeader={trackInfo ? trackInfo.name : 'Cargando...'}
      header="withBack"
      onPressBack={() => {
        navigation.goBack();
        clearTrack();
      }}>
      <View style={styles.container}>
        {/* image */}
        <Image
          source={{
            uri:
              trackInfo?.image
          }}
          style={styles.image}
        />
        {/* text album and artist */}
        <View style={styles.containerTexts}>
          <View style={styles.textInfoWidth}>
            <Text style={styles.textTitle}>Album</Text>
            <Text numberOfLines={1} style={styles.text}>
              {trackInfo?.album}
            </Text>
          </View>
          <View style={styles.textInfoWidth}>
            <Text style={styles.textTitle}>Artist</Text>
            <Text numberOfLines={1} style={styles.text}>
              {trackInfo?.artistName}
            </Text>
          </View>
        </View>
        {/* text published */}
        <View style={styles.containerTextInfo}>
          <Text style={styles.textTitle}>Published</Text>
          <Text numberOfLines={1} style={styles.text}>
            {trackInfo?.published}
          </Text>
        </View>
        {/* text description */}
        <View>
          <Text style={styles.textTitle}>Description</Text>
          {/* <Text style={text.caption}>{trackInfo?.description}</Text> */}
          <RenderHTML
            baseStyle={{
              fontSize: 15,
              fontFamily: 'Roboto',
              color: colors.primaryTextColor,
            }}
            contentWidth={200}
            source={{html: trackInfo?.description || ''}}
          />
        </View>
      </View>
    </MainScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 345,
    borderRadius: 20,
  },
  containerTexts: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 25,
  },
  containerTextInfo: {
    alignSelf: 'flex-start',
    paddingBottom: 20,
  },
  textInfoWidth: {
    width: '45%',
  },
  textTitle: {
    paddingBottom: 8,
    ...text.h2,
  },
  text: {
    ...text.h2Regular,
  },
});
