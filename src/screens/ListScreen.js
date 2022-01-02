import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, SpeedDial } from 'react-native-elements';

const ListScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center' }}>No Data to show</Text>

      <SpeedDial
        isOpen={open}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title='Add'
          onPress={() => navigation.navigate('Map')}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          title='Delete'
          onPress={() => console.log('Delete Something')}
        />
      </SpeedDial>
    </View>
  );
};

export default ListScreen;
