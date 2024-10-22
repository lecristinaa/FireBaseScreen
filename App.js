import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'

// Importação das telas
import SingUpScreen from './src/screens/SingUpScreen.jsx'
import LoginScreen from './src/screens/LoginScreen.jsx'
import HomeScreen from './src/screens/HomeScreen.jsx'

// Inicialização do Firebase 
if (!firebase.apps.length) {
  firebase.initializeApp({
    // Suas configurações do Firebase
  });
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SingUp" component={SingUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
