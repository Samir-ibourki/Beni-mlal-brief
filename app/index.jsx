//import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ModalScreen() {
  return (
   <View style={styles.container} >
    <Text style={styles.text}>
      hello world
    </Text>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
