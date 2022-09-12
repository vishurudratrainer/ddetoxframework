import {View, Text, Button, TextInput} from 'react-native';
import axios from 'axios';
import {useState} from 'react';
export default function App() {
  const [data, setData] = useState();
  const [enteredInput, setEnteredInput] = useState();
  const handleChange = text => {
    setEnteredInput(text);
  };

  const handlePress = () => {
    console.log('clicked');
    console.log(new Date());
    fetch('http://10.0.2.2:4000/hello')
      .then(res => res.json())
      .then(res => setData(res));
  };
  return (
    <View testID="welcome">
      <Text testID="hi">Hi</Text>
      <TextInput
        testID="entername"
        placeholder="Enter ur name "
        onChangeText={handleChange}></TextInput>
      <Text testID="enteredname">{enteredInput}</Text>
      <Button title="click" testID="click" onPress={handlePress}>
        Click
      </Button>
      <Text testID="email">{data ? JSON.stringify(data['success']) : ''}</Text>
    </View>
  );
}
