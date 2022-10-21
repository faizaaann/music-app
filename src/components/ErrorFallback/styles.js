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
    width: (deviceWidth / 100) * 33,
    height: (deviceHeight / 100) * 30,
  },
  somethingWrong: {
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
    marginVertical: 5,
  },
  somethingWrongMessage: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    marginVertical: 8,
  },
});

export default styles;
