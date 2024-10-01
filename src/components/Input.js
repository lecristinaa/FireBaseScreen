import { TextInput, StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function InputField ({ placeholder, keyboardType, secureTextEntry, onChangeText }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#5E17EB', '#991164']} style={styles.gradient}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="#afafaf"
          onChangeText={onChangeText}
        />
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    overflow: 'hidden', 
    marginBottom: 8, 
  },
  gradient: {
    padding: 2, 
    borderRadius: 25, 
  },
  input: {
    height: 60,
    width: 300,
    backgroundColor: '#fff', 
    borderRadius: 25,
    paddingLeft: 10,
    color: '#afafaf',
  },
})

