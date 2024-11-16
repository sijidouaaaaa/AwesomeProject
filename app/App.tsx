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

import {Demo} from './nav/demo/demo';
import {LocalStorage} from './nav/local-storage/local-storage';
import Animated from './nav/animated/index.tsx';
import {MyWeb} from './nav/web-view/index.tsx';

import {PickerIndex} from './nav/picker/index.tsx';

import {SafeAreaProvider} from 'react-native-safe-area-context';

export type RootStackParamList = {
  Home: undefined;
  A: undefined;
  B: undefined;
  Animated: undefined;
  MyWeb: undefined;
  Picker: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const screens: {
  name: keyof RootStackParamList;
  component: React.ComponentType;
  title: string;
}[] = [
  {name: 'Home', component: Home, title: '首页'},
  {name: 'A', component: Demo, title: '演示页面'},
  {name: 'B', component: LocalStorage, title: '本地存储页面'},
  {name: 'Animated', component: Animated, title: '动画页面'},
  {name: 'MyWeb', component: MyWeb, title: 'MyWeb页面'},
  {name: 'Picker', component: PickerIndex, title: 'Picker页面'},
];

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {screens.map(({name, component, title}) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={{title}}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
