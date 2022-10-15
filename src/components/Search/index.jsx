import { Image, StyleSheet, TextInput, View } from 'react-native';

import colors from '../../constants/colors';
import images from '../../constants/images';

const Search = ({ onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <Image source={images.SEARCH} style={styles.searchIcon} />
      <TextInput style={styles.input} onChangeText={onChangeText} placeholder={'Search artist'} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    backgroundColor: colors.WHITE,
    borderRadius: 4,
    borderColor: colors.GREY_WHITE,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
  },
  searchIcon: {
    height: 17,
    width: 17,
  },
});
