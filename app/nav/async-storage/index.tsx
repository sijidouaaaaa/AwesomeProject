import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View, Button, Alert, StyleSheet} from 'react-native';
import {Storage} from './storage';
export const AsyncStorageIndex = () => {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    spacer: {
      height: 20,
    },
  });
  const storeData = async (value: string) => {
    try {
      //   const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-key', value);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        Alert.alert(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  const addStoreData = async (value: string) => {
    try {
      //   const jsonValue = JSON.stringify(value);
      await Storage.setItem('mytest01', value);
    } catch (e) {
      // saving error
    }
  };
  const getMyData = async () => {
    try {
      const value = await Storage.getItem('mytest01');
      if (value !== null) {
        Alert.alert(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View style={[style.container]}>
      <Button title="存储" onPress={() => storeData('hello RN')} />
      <View style={[style.spacer]} />
      <Button title="获取" onPress={() => getData()} />
      <View style={[style.spacer]} />
      <Button title="存储01" onPress={() => addStoreData('hello 01')} />
      <View style={[style.spacer]} />
      <Button title="获取01" onPress={() => getMyData()} />
      <View style={[style.spacer]} />
      <Button title="清空" onPress={() => Storage.clear()} />
    </View>
  );
};
