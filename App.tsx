/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,


  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    ...styles,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>
        TITLE.......
      </Text>
      <View>
        <Text>
          CONTENT......
        </Text>
        <Text>
          CONTENT......
        </Text>
        <Text>
          CONTENT......
        </Text>
        <Text>
          CONTENT......
        </Text>
        <Text>
          CONTENT......
        </Text>
        <Text>
          CONTENT......
        </Text>
        <Text>
          CONTENT......
        </Text>
        <Text>
          CONTENT......
        </Text>
        <Text>
          CONTENT......
        </Text>
        <Text>
          CONTENT......
        </Text>
        <Text>
          CONTENT......
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  },
});

export default App;
