import { View, Text, StyleSheet } from 'react-native'
import CustomInput from "./input";

const App = () => {
  return (
    <View
      style={styles.parent}>
      <Text>Enter a secret!!</Text>
      <CustomInput />
    </View>
  )
}

const styles = StyleSheet.create({
  parent: {
      flex: 1,
      padding:20,
      gap:10
    }
});

export default App