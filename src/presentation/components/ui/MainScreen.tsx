import {PropsWithChildren} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {colors, text} from '../../../config/theme/theme';
import {Avatar} from './Avatar';
interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
  header?: 'Main' | 'withBack';
  textHeader: string;
  onPressBack?: () => void;
}

export const MainScreen = ({
  children,
  style,
  header = 'Main',
  textHeader,
  onPressBack = undefined,
}: Props) => {
  const CustomHeader = () => {
    switch (header) {
      case 'Main':
        return (
          <View style={[styles.header, styles.headerMain]}>
            <Text numberOfLines={1} style={[text.h1]}>
              {textHeader}
            </Text>
            <Avatar />
          </View>
        );
      case 'withBack':
        return (
          <View style={[styles.header, styles.headerBack]}>
            <Pressable onPress={onPressBack}>
              <Image
                source={require('../../../assets/arrow_back.png')}
                style={{width: 22, height: 22}}
              />
            </Pressable>
            <Text numberOfLines={1} style={[text.h1, {width: '70%'}]}>
              {textHeader}
            </Text>
            <View style={{width: 22}} />
          </View>
        );
      default:
        return <View></View>;
    }
  };

  return (
    <SafeAreaView style={[styles.mainContainer, style]}>
      <CustomHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 18, paddingTop: 20}}>
        {children}
        <View style={{height: 70}} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
  },
  header: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerMain: {
    justifyContent: 'space-between',
  },
  headerBack: {
    justifyContent: 'space-between',
  },
});
