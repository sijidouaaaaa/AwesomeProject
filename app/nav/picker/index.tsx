import React from 'react';
import {Picker} from '@react-native-picker/picker';
export const PickerIndex = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState();

  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={itemValue => setSelectedLanguage(itemValue)}
      mode="dropdown" //只在android下有效
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};
