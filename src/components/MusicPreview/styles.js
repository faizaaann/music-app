import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  MPContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginVertical: 6,
  },
  activeTrackContainer: {
    borderColor: colors.GREY_WHITE,
    borderWidth: 3,
    alignSelf: 'center',
  },
  playButtonContainer: {
    alignSelf: 'center',
    marginTop: 15,
  },
  playIcon: {
    width: 30,
    height: 30,
  },
  trackImage: {
    width: 200,
    height: 200,
  },
  songsContainer: {
    margin: 25,
  },
});

export default styles;
