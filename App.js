import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.white}>Heyyyy This is a sample text</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B004D',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white',
    fontSize: 20
  }
});
