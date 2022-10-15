import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: 58,
    height: 58,
  },
  trackImage: {
    width: 52,
    height: 52,
    marginTop: 5,
  },
  trackInfo: {
    display: 'flex',
    padding: 25,
  },
  trackName: {
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 2,
  },
  artistName: {
    fontWeight: 600,
    marginLeft: 15,
    marginTop: 1,
  },
  albumName: {
    fontWeight: 400,
    marginLeft: 15,
    marginTop: 1,
  },
  playingStatus: {
    fontSize: 13,
    fontWeight: 500,
    fontStyle: 'italic',
    marginTop: 25,
    marginLeft: 12,
  },
  songInfo: {
    width: (deviceWidth / 100) * 80,
    marginVertical: 10,
  },
  songInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
