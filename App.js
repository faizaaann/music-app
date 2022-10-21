import { Suspense } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { ActivityIndicator } from 'react-native';
import Home from './src/screens/Home';
import ErrorFallback from './src/components/ErrorFallback';
import { NativeBaseProvider } from 'native-base';
import colors from './src/constants/colors';

const errorHandler = (error, stackTrace) => {
  console.log(error, stackTrace);
};

const resetErrorBoundary = () => {};

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler} resetErrorBoundary={resetErrorBoundary}>
      <NativeBaseProvider>
        <Suspense fallback={<ActivityIndicator size="large" color={colors.BLACK} />}>
          <Home />
        </Suspense>
      </NativeBaseProvider>
    </ErrorBoundary>
  );
}
