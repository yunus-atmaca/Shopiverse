import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {Text, View} from 'react-native';

const AppErrorBoundary = (props: React.PropsWithChildren) => {
  //use this in fallback
  //const {resetBoundary, showBoundary} = useErrorBoundary();

  const catchError = (errorObject: Error, errorInfo: React.ErrorInfo) => {
    console.debug('errorObject -> ', errorObject);
    console.debug('errorInfo -> ', errorInfo);
  };

  return (
    <ErrorBoundary
      fallback={
        <View style={{position: 'absolute', left: 0, right: 0, top: 128}}>
          <Text>ERROR HAPPENED</Text>
        </View>
      }
      onError={catchError}>
      {props.children}
    </ErrorBoundary>
  );
};

export default AppErrorBoundary;
