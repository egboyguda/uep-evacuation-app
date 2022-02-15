import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import Form from '../components/form';
import Map from '../components/Map';
import { Context as apiContext } from '../context/apiContext';
import { Context as locationContext } from '../context/locationContext';

const FormSubmit = () => {
  const { addEvacuation } = useContext(apiContext);
  const { state } = useContext(locationContext);
  const [name, setName] = useState('');
  const [capacity, setCapacity] = useState('');
  return (
    <View>
      <Map style={{ height: 300 }} />
      <Form
        onChangeMail={(val) => {
          setName(val);
        }}
        onChangePass={(val) => {
          setCapacity(val);
        }}
        upperLabel={'Evacuation Center Name'}
        lowerLabel={'Max Capacity'}
        btnTitle={'Submit'}
        btnLogic={() => {
          addEvacuation(name, state.location, capacity);
        }}
      />
    </View>
  );
};

export default FormSubmit;
