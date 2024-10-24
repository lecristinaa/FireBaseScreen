import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'

export default function HomeScreen() {
  return (
    <LinearGradient colors={['#5E17EB', '#991164']} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Text style={styles.welcomeText}>Bem-vindo(a) ao aplicativo!</Text>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.messageText}>Esta é a sua tela inicial.</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    padding: 20,
    marginTop: -50, 
    overflow: 'hidden', 
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  messageText: {
    color: '#afafaf',
    fontSize: 16,
  },
})
