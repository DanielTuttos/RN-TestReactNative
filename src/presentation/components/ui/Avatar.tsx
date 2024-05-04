import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Props {
  style?: StyleProp<ImageStyle>;
}
export const Avatar = ({style}: Props) => {
  return (
    <Image
      source={require('../../../assets/profile.png')}
      style={[styles.image, style]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
});
