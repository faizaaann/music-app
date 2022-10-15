import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: (deviceWidth / 100) * 30,
    height: (deviceHeight / 100) * 30,
  },
  somethingWrong: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    marginVertical: 5,
  },
});

export default styles;
