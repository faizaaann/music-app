import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: -400,
    marginBottom: 50,
  },
  imageContainer: {
    width: (deviceWidth / 100) * 40,
    height: (deviceHeight / 100) * 40,
  },
});

export default styles;
