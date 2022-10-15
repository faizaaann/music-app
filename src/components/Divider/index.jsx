import { View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const Divider = () => {
  return (
    <View
      style={{
        borderBottomColor: colors.GREY_WHITE,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 25,
      }}
    />
  );
};

export default Divider;
