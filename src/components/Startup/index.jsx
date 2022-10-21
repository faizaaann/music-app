import { View, ActivityIndicator, Text } from 'react-native';
import colors from '../../constants/colors';
import styles from '../../screens/Home/styles';

/**
 * Component displayed when application starts
 *
 * @component
 * @example
 *
 * return <Startup Search={Search} setSearch={setSearch} isError={isError} isLoading={isLoading} />
 *
 * @returns {ReactElement}
 * @author Faizan Ahmad <a-f.a@outlook.com>
 * @version 1.0.0
 */

const Startup = ({ Search, isLoading, setSearch, isError }) => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.titleText}>Music App</Text>
      <View style={styles.emptyScreenSearch}>
        <Search onChangeText={(text) => setSearch(text)} />
      </View>
      {isLoading && <ActivityIndicator size="large" color={colors.BLACK} style={{ marginVertical: 10 }} />}
      {isError && (
        <View>
          <Text style={styles.noResultText}>No Results Found</Text>
        </View>
      )}
      <View style={styles.emptyTextView}>
        <Text style={styles.emptyText}>Search your favourite tracks, artists or albums... </Text>
      </View>
    </View>
  );
};

export default Startup;
