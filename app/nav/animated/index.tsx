import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View, useAnimatedValue} from 'react-native';
import type {PropsWithChildren} from 'react';
import type {ViewStyle} from 'react-native';

type FadeInViewProps = PropsWithChildren<{style: ViewStyle}>;

const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useAnimatedValue(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default () => {
  const containerStyle = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fadeInView: {
      width: 250,
      height: 50,
      backgroundColor: 'powderblue',
    },
    text: {
      fontSize: 28,
      textAlign: 'center',
      margin: 10,
    },
    scanContainer: {
      width: 300,
      height: 300,
      borderWidth: 1,
      borderColor: 'black',
    },
    border: {
      borderWidth: 1,
      borderColor: 'gray',
    },
  });

  const moverAnim = useRef(new Animated.Value(0)).current;

  const scanMove = useCallback(() => {
    Animated.timing(moverAnim, {
      toValue: 300, //目标值
      duration: 10000, //动画持续时间1秒
      useNativeDriver: true, //是否使用原生动画引擎
    }).start(() => {
      //动画结束后调用
      moverAnim.setValue(0);
      scanMove();
    });
  }, [moverAnim]);

  useEffect(() => {
    scanMove();
  }, [scanMove]);

  return (
    <View style={containerStyle.container}>
      <FadeInView style={containerStyle.fadeInView}>
        <Text style={containerStyle.text}>Fading in</Text>
      </FadeInView>

      <View style={containerStyle.scanContainer}>
        <Animated.View
          style={[
            containerStyle.border,
            {
              transform: [{translateY: moverAnim}],
            },
          ]}
        />
      </View>
    </View>
  );
};
