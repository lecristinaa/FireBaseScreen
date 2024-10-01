import InitializeApp from './App.js'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'


async function loginWithEmailAndPassword(userCredentials){
    const auth = getAuth(InitializeApp)

    try{
        const response = await createUserWithEmailAndPassword (
            auth,
            userCredentials.email,
            userCredentials.password
        )
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
    
}
