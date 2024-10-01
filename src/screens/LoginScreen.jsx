import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, SafeAreaView, View, Image, TouchableOpacity, Text } from 'react-native'
import InputField from '../components/Input'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  async function tryLogin(userCredentials){
    // Validação de campos
    
    console.log("Validando os campos")
    console.log(userCredentials)

    const response = await loginWithEmailAndPassword(userCredentials)
    if (response.error){
        console.log("Erro ao logar")
        console.log(response)
        return
    }
  }


  return (
    <LinearGradient colors={['#5E17EB', '#991164']} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/user.png')} style={styles.image} />
        </View>

        <View style={styles.loginContainer}>
          <InputField
            placeholder="Digite seu e-mail: "
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <InputField
            placeholder="Digite sua senha: "
            keyboardType="default"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <LinearGradient colors={['#5E17EB', '#991164']} style={styles.button}>
            <TouchableOpacity onPress={() => tryLogin(user)}>
              <Text style={styles.buttonText}> Acessar </Text>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity onPress={() => navigation.navigate('SingUp')}>
            <Text style={styles.text}>Caso não tenha uma, crie sua conta!</Text>
          </TouchableOpacity>
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
  image: {
    height: 300,
    width: 200,
    resizeMode: 'contain',
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
