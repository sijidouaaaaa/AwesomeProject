import React from 'react';
import {Text} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export const CameraScreen = () => {
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();

  return (
    <>
      {!hasPermission && <Text>No permission!</Text>}
      {!device && <Text>No camera device found.</Text>}
      {device && <Camera device={device} isActive={true} />}
    </>
  );
};
