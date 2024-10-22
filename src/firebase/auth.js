import InitializeApp from './App.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

// Função para criar uma nova conta de usuário
async function createNewAccount(userCredentials) {
    const auth = getAuth(InitializeApp) // Obtém a instância de autenticação do Firebase
    
    try {
        // Tenta criar uma nova conta com o email e senha fornecidos
        const response = await createUserWithEmailAndPassword(
            auth,
            userCredentials.email,
            userCredentials.password
        )
        console.log('Conta criada com sucesso:', response.user) 
        // Aqui você pode adicionar lógica adicional, como navegar para a tela inicial
        return response.user // Retorna o usuário criado
    } catch (error) {
        // Em caso de erro, captura a mensagem de erro e exibe no console
        console.error('Erro ao criar conta:', error.message)
        // Opcional: Aqui você pode exibir uma mensagem de erro ao usuário
    }
}

// Função para login com email e senha
// Recebe as credenciais do usuário (email e senha) como argumento
async function loginWithEmailAndPassword(userCredentials) {
    const auth = getAuth(InitializeApp) // Obtém a instância de autenticação do Firebase

    try {
        // Tenta fazer login com o email e senha fornecidos
        const response = await signInWithEmailAndPassword(
            auth,
            userCredentials.email,
            userCredentials.password
        )
        console.log('Login bem-sucedido:', response.user) // Exibe os dados do usuário autenticado
        // Aqui você pode redirecionar o usuário para a tela inicial após o login
        return response.user // Retorna o usuário autenticado
    } catch (error) {
        // Em caso de erro, captura a mensagem de erro e exibe no console
        console.error('Erro no login:', error.message)
        // Opcional: Aqui você pode exibir uma mensagem de erro ao usuário
    }
}
