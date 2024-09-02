import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  const calculate = () => {
    const ageNumber = parseFloat(age);
    const lower = (220 - ageNumber) * 0.65;
    const upper = (220 - ageNumber) * 0.85;
    setLowerLimit(lower);
    setUpperLimit(upper);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType="decimal-pad"
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>
        {lowerLimit.toFixed(0)}-{upperLimit.toFixed(0)}
      </Text>
      <Button title="Calculate" onPress={calculate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  },
});
