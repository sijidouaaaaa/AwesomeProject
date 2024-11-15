// Home.tsx
import React from 'react';
import {SafeAreaView, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './App';

const NavigationButton = ({
  title,
  destination,
}: {
  title: string;
  destination: keyof RootStackParamList;
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Button title={title} onPress={() => navigation.navigate(destination)} />
  );
};

export const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationButton title="前往 A 页面" destination="A" />
      <NavigationButton title="前往 B 页面" destination="B" />
      <NavigationButton title="前往 Animated页面" destination="Animated" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
