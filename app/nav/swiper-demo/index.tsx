import React from 'react';

import {Dimensions, Image, ScrollView, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
export const SwiperIndex = () => {
  const style = StyleSheet.create({
    wrapper: {
      height: 200,
    },
    slideImage: {
      height: 200,
      width: Dimensions.get('window').width, //屏幕宽度
      resizeMode: 'contain', //缩放模式 确保图片完全可见
    },
  });

  return (
    <ScrollView>
      <Swiper
        style={[style.wrapper]}
        showsButtons={true} //显示左右按钮
        autoplay={true} //自动轮博播放 必须ScrollView这个里面
      >
        {/* 里面可以写任意内容，页面获取其他，不一定是图片 */}
        <Image
          style={[style.slideImage]}
          source={require('./images/photo-1.webp')}
        />
        <Image
          style={[style.slideImage]}
          source={require('./images/photo-12.webp')}
        />
        <Image
          style={[style.slideImage]}
          source={require('./images/photo-143.webp')}
        />
      </Swiper>
    </ScrollView>
  );
};
