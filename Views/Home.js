import React from 'react';
import { View, Text, Button,TouchableOpacity,Image } from 'react-native';
import {css} from '../assets/css/Css';


export default function Home({navigation}) {
  
  return (
    <View style={{backgroundColor:`#FFD700`, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
    <Text style={{marginTop:5,fontWeight:420}}>A company thats makes everything</Text>
   
   <View style={css.viewHome}>
   <Text style={css.bv_Text}>Bem vindo(a) </Text>
      
    
   <Text style={{marginLeft:42,fontWeight:`bold`,justifyContent:`center`,alignItems:`center`}}>Crie sua conta ACME:</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('Criar')} style={css.but1}>
            <Text style={css.login_buttonText}>Criar conta</Text>
        </TouchableOpacity>


        <Text style={{marginTop:20,marginLeft:28,fontWeight:`bold`,justifyContent:`center`,alignItems:`center`}}>Entre na sua conta ACME:</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={css.but1}>
            <Text style={css.login_buttonText}>Entrar</Text>
        </TouchableOpacity>


        <Text>
        <TouchableOpacity onPress={() => navigation.navigate('EsqSenha')} style={css.butForgot}>
            <Text style={css.butForgot}>Esqueceu a senha</Text>
        </TouchableOpacity>
        </Text>

   
   </View>
   

    </View>
      
   
  );
}

