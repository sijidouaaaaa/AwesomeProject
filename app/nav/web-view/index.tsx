import React from 'react';
import {WebView} from 'react-native-webview';

export const MyWeb = () => {
  return <WebView source={{html: '<h1 style="color:red">Hello World</h1>'}} />;
};
