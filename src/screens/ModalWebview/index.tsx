import React from 'react';
import {} from 'react-native';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import {RootStackScreenProps} from '@/navigation';
import WebView from 'react-native-webview';

const ModalWebview = ({
  route: {params},
}: RootStackScreenProps<'ModalWebview'>) => {
  return (
    <PageWrapper removeTop>
      <PageHeader disableGab header="Agreement" />
      <WebView style={{flex: 1}} source={{uri: params.url}} />
    </PageWrapper>
  );
};

export default ModalWebview;
