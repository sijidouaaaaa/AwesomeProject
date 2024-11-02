/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * flex布局
 * @format
 */

import React from 'react';

import {
  SafeAreaView,


  StyleSheet,
  Text,

  View,
} from 'react-native';



function App(): React.JSX.Element {



  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.pinkView}>
        <Text> TITLE....... </Text>
      </View>
      <View style={styles.burlywoodView}>
        <Text> CONTENT...... </Text>
      </View>
      <View style={styles.cyanView}>
        <Text> CONTENT...... </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text> CONTENT...... </Text>
        <Text> CONTENT...... </Text>
        <Text> CONTENT...... </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  }, pinkView: {
    backgroundColor: 'pink',
    // flex: 1,
    height: 100,
    width: 200,
  },
  burlywoodView: {
    backgroundColor: 'burlywood',
    // flex: 2,
    height: 100,
    width: 200,
  },
  cyanView: {
    backgroundColor: 'cyan',
    // flex: 3,
    height: 100,
    width: 200,
  },
  contentContainer: {
    height: 100,
    width: 200,
  },
});

export default App;
