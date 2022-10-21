import { Suspense } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { Text } from 'react-native';
import Home from './src/screens/Home';
import ErrorFallback from './src/components/ErrorFallback';
import { NativeBaseProvider, Box } from 'native-base';
const errorHandler = (error, stackTrace) => {
  /* Log the error to an error reporting service */
  console.log(error, stackTrace);
};

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
      <NativeBaseProvider>
        <Suspense fallback={<Text>Loading ....</Text>}>
          <Home />
        </Suspense>
      </NativeBaseProvider>
    </ErrorBoundary>
  );
}
