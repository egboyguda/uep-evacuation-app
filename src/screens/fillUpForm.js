import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import Form from '../components/form';
import Map from '../components/Map';

const FormSubmit = () => {
  return (
    <View>
      <Map style={{ height: 300 }} />
      <Form
        onChangeMail={null}
        onChangePass={null}
        upperLabel={'Evacuation Center Name'}
        lowerLabel={'Max Capacity'}
        btnTitle={'Submit'}
      />
    </View>
  );
};

export default FormSubmit;
