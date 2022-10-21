import { View, Text, Button } from 'react-native';

import ErrorImage from '../Svg';
import styles from './styles';

const ErrorFallback = ({ error, componentStack, resetErrorBoundary }) => {
  return (
    <View style={styles.container}>
      <ErrorImage />
      <View style={styles.textContainer}>
        <Text style={styles.somethingWrong}>Oh Snap! Something Went Wrong</Text>
        <Text style={styles.somethingWrongMessage}>{error?.message}</Text>
        <Text>{componentStack}</Text>
        <Button onPress={resetErrorBoundary} title="Try Again" />
      </View>
    </View>
  );
};

export default ErrorFallback;
