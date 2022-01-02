import React from 'react';
import { Input, Text, Button } from 'react-native-elements';
import { View } from 'react-native';

//destructure an mga props na gn pasa
const Form = ({
  onChangeMail,
  onChangePass,
  btnLogic,
  upperLabel,
  lowerLabel,
  isPassword,
  btnTitle,
  upperIcon,
  lowerIcon,
}) => {
  return (
    <View>
      <Input
        label={upperLabel}
        onChangeText={(val) => {
          onChangeMail(val);
        }}
        leftIcon={upperIcon}
      />

      {isPassword ? (
        <Input
          label={lowerLabel}
          secureTextEntry
          onChangeText={(val) => {
            onChangePass(val);
          }}
          leftIcon={lowerIcon}
        />
      ) : (
        <Input
          label={lowerLabel}
          onChangeText={(val) => {
            onChangePass(val);
          }}
          leftIcon={lowerIcon}
        />
      )}
      <Button
        title={btnTitle}
        onPress={() => {
          btnLogic();
        }}
      />
    </View>
  );
};

export default Form;
