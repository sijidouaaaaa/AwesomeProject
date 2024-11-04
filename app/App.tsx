/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from './Home.tsx'; // 导入 Home 组件
// 假设 A 和 B 页面已经定义
import {Demo} from './nav/demo/demo';
import {LocalStorage} from './nav/local-storage/local-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export type RootStackParamList = {
  Home: undefined;
  A: undefined;
  B: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ title: '主页面' }} />
          <Stack.Screen name="A" component={Demo} options={{ title: 'A 页面' }} />
          <Stack.Screen name="B" component={LocalStorage} options={{ title: 'B 页面' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;