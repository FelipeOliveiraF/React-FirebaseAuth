import React from 'react';
import { View, Text,  } from 'react-native';
import {css} from '../assets/css/Css';
import{getAuth,signInWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth';
import{initializeApp} from 'firebase/app';
import {firebaseConfig} from '../firebaseConnection';



export default function EsqSenha(navigation) {
  return (
    
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
      hideLoading();
      alert('Email enviado com sucesso');
  }).catch(error => {
      hideLoading();
      alert(getErrorMessage(error));
  })
  );

}