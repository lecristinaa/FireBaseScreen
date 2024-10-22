import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, SafeAreaView, View, Image, TouchableOpacity, Text, Alert } from 'react-native'
import InputField from '../components/Input' // Importa o componente de campo de entrada
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth' // Importa funções do Firebase
import InitializeApp from './App.js' // Importa a inicialização do app Firebase

export default function SignUpScreen({ navigation }) {
  // Estado do usuário contendo nome, email, telefone e senha
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  })

  // Função para lidar com o cadastro do usuário
  const handleSignUp = async () => {
    const auth = getAuth(InitializeApp) // Inicializa a autenticação do Firebase

    try {
      // Tenta criar um novo usuário com email e senha
      const response = await createUserWithEmailAndPassword(auth, user.email, user.password)
      console.log('Cadastro bem-sucedido:', response.user) // Log do usuário cadastrado
      Alert.alert('Sucesso', 'Conta criada com sucesso!') // Alerta de sucesso
      // Redireciona para a tela de login após o cadastro
      navigation.navigate('Login')
    } catch (error) {
      console.error('Erro no cadastro:', error.message) // Log do erro
      Alert.alert('Erro', error.message) // Exibe um alerta de erro
    }
  }

  // Função para atualizar o estado do usuário ao alterar campos de entrada
  const handleInputChange = (field, value) => {
    setUser(prevState => ({ ...prevState, [field]: value })) // Atualiza o campo específico no estado do usuário
  }

  return (
    // Gradiente de fundo
    <LinearGradient colors={['#5E17EB', '#991164']} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/user.png')} style={styles.image} /> {/* Imagem do usuário */}
        </View>

        <View style={styles.signUpContainer}>
          {/* Campo para inserir o nome completo */}
          <InputField
            label="Nome Completo"
            value={user.name}
            onChangeText={value => handleInputChange('name', value)} // Atualiza o estado quando o texto muda
            placeholder="Digite seu nome completo"
          />

          {/* Campo para inserir o email */}
          <InputField
            label="Email"
            value={user.email}
            onChangeText={value => handleInputChange('email', value)}
            keyboardType="email-address"
            placeholder="Digite seu email"
          />

          {/* Campo para inserir o telefone */}
          <InputField
            label="Telefone"
            value={user.phone}
            onChangeText={value => handleInputChange('phone', value)}
            keyboardType="phone-pad"
            placeholder="Digite seu telefone"
          />

          {/* Campo para inserir a senha */}
          <InputField
            label="Senha"
            value={user.password}
            onChangeText={value => handleInputChange('password', value)}
            secureTextEntry
            placeholder="Digite sua senha"
          />

         
          <LinearGradient colors={['#5E17EB', '#991164']} style={styles.button}>
            <TouchableOpacity onPress={handleSignUp}> 
              <Text style={styles.buttonText}> Cadastrar </Text>
            </TouchableOpacity>
          </LinearGradient>


          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text}>Já tem uma conta? Faça login! </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  gradient: {
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
  image: {
    height: 300,
    width: 200,
    resizeMode: 'contain', // Ajusta a imagem para se adaptar ao espaço
  },
  signUpContainer: {
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
    marginTop: 20,
  },
})
