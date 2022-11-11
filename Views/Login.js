import React from 'react';
import { View, Text, TextInput,KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import {css} from '../assets/css/Css';
import{getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import{initializeApp} from 'firebase/app';





export default function Login(navigation) {

  
  const[email, setEmail] = React.useState('');  
  const[password, setPassword] = React.useState('');  
 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const handleSignIn = () => {

  if(email === '' || password === ''){
    alert(`Preencha todos os campos necessários`)
    return;
  }
  signInWithEmailAndPassword(auth,email,password)
  .then((userCredencial) => {
    alert('Login efetuado com sucesso!')
   
    console.log('Login efetuado com sucesso!')
    const user = userCredencial.user;
    console.log(user)
   
  })
  .catch(error =>{
    alert('Usuário ou senha não encontrados')
    console.log(error)
  })
}

  
  return (
    

    <KeyboardAvoidingView style={[css.container,css.darkbg]} >
        <View style={css.login_form} >
        
        <Text style={css.bv_Text}>Entre em sua conta:  </Text>
      <TextInput style={css.login_input} placeholder='Email:' 
      leftIcon={{type:'font-awesome',name:'envelope'}}
      value={email} onChangeText={value => setEmail(value)} ></TextInput>
      <TextInput style={css.login_input} placeholder='Senha:'  value={password} onChangeText={value => setPassword(value)} secureTextEntry={true}></TextInput>
       
        <TouchableOpacity onPress={handleSignIn}  style={css.login_button}>
            <Text style={css.login_buttonText}>Entrar</Text>
        </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
 
  );
}


