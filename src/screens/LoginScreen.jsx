import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from 'react-native'
import InputField from '../components/Input'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import InitializeApp from './App.js'

export default function LoginScreen({ navigation }) {
  // Estado do usuário com campos para email e senha
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  // Função para fazer login
  const handleLogin = async () => {
    const auth = getAuth(InitializeApp)

    try {
      const response = await signInWithEmailAndPassword(auth, user.email, user.password)
      console.log('Login bem-sucedido:', response.user) // Log do usuário logado
      navigation.navigate('Home') // Redireciona para a tela inicial
    } catch (error) {
      console.error('Erro no login:', error.message) // Log do erro
      Alert.alert('Erro', error.message) // Mensagem de erro
    }
  }

  // Função para atualizar o estado ao mudar campos de entrada
  const handleInputChange = (field, value) => {
    setUser(prevState => ({ ...prevState, [field]: value })) // Atualiza o campo específico
  }

  return (
    <LinearGradient colors={['#5E17EB', '#991164']} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
        </View>

        <View style={styles.loginContainer}>
          <InputField 
            label="Email" 
            value={user.email} 
            onChangeText={value => handleInputChange('email', value)} 
            keyboardType="email-address" 
            placeholder="Digite seu email" 
          />
          <InputField 
            label="Senha" 
            value={user.password} 
            onChangeText={value => handleInputChange('password', value)} 
            secureTextEntry 
            placeholder="Digite sua senha" 
          />
          <LinearGradient colors={['#5E17EB', '#991164']} style={styles.button}>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.buttonText}> Entrar </Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient colors={['#5E17EB', '#991164']} style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}> Voltar </Text>
            </TouchableOpacity>
          </LinearGradient>
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
  button: {
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 15,
    width: 300,
    height: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#afafaf',
    fontSize: 12,
    marginTop: 50,
  },
})
