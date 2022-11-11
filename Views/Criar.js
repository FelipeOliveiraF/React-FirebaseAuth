import React from 'react';
import { View, Text, TextInput,KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import {css} from '../assets/css/Css';

import{getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import{initializeApp} from 'firebase/app';
import {firebaseConfig} from '../firebaseConnection';

export default function Criar() {

  
  const[email, setEmail] = React.useState('');  
  const[password, setPassword] = React.useState('');

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

const handleCreateAccount = () => {

  
  if(email === '' || password === ''){
    alert(`Preencha todos os campos necessários`)
    return;
  }

  if(password.length <= 5){
    alert('A senha deve ter no minimo 6 caracteres')
  }

  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredencial) => {
    alert('Conta criada com sucesso!')
    console.log('Conta criada!')
    const user = userCredencial.user;
    console.log(user)
  })
  .catch(error =>{
    alert('Problemas ao criar conta')
    console.log(error)
  })
}

  return (
    <KeyboardAvoidingView style={[css.container,css.darkbg]} >
        <View style={css.login_form} >

        <Text style={css.bv_Text}>Preencha os campos solicitados para criar sua conta: </Text>
        <TextInput style={css.login_input} placeholder='Email:' textContentType='email' value={email} onChangeText={value => setEmail(value)} ></TextInput>
      <TextInput style={css.login_input} placeholder='Senha:'  value={password} onChangeText={value => setPassword(value)} secureTextEntry={true}></TextInput>
      <Text style={css.attentionPassword}>• A senha deve ter no mínimo 6 carácteres</Text>
      <TouchableOpacity onPress={handleCreateAccount} style={css.login_button}>
            <Text style={css.login_buttonText}>Finalizar</Text>
        </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
 
  );
}