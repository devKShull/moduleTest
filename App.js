import React from 'react'
import { Text, SafeAreaView, Button } from 'react-native';
import ReactNativeCalendarEvents from './cal'
export default App = () => {

  const test = async () => {
    const res = await ReactNativeCalendarEvents.requestPermissions()
    console.log(res);
  }
  return (
    <SafeAreaView>
      <Text>sdsdsdssdsd</Text>
      <Button title="test" onPress={() => test()} />
    </SafeAreaView>
  );
};
