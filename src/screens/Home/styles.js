import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    disply: 'flex',
    flexDirection: 'row',
    flex: 1,
    padding: 25,
  },
  search: {
    alignSelf: 'flex-start',
    margin: 10,
    borderColor: colors.GREY_WHITE,
    borderWidth: 3,
    maxWidth: (deviceWidth / 100) * 20,
  },
  emptyContainer: {
    display: 'flex',
    flex: 1,
    minHeight: deviceHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTextView: {
    marginTop: 25,
  },
  emptyScreenSearch: {
    borderColor: colors.GREY_WHITE,
    borderWidth: 3,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: 500,
    fontStyle: 'italic',
  },
  list: {
    marginTop: 25,
    flex: 1,
  },
  leftContiner: {
    maxWidth: (deviceWidth / 100) * 30,
    padding: 25,
  },
  rightContainer: {
    borderLeftColor: colors.GREY_WHITE,
    borderLeftWidth: 2,
    padding: 25,
    display: 'flex',
    alignItems: 'center',
    width: (deviceWidth / 100) * 70,
  },
});

export default styles;
