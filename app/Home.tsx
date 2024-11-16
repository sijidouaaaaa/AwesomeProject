import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, StyleSheet} from 'react-native';
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
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(destination)}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationButton title="前往 A 页面" destination="A" />
      <NavigationButton title="前往 B 页面" destination="B" />
      <NavigationButton title="前往 Animated页面" destination="Animated" />
      <NavigationButton title="前往 MyWeb页面" destination="MyWeb" />
      <NavigationButton title="前往Picker页面" destination="Picker" />
      <NavigationButton title="前往Swiper页面" destination="SwiperIndex" />
      <NavigationButton
        title="前往AsyncStorage页面"
        destination="AsyncStorage"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
