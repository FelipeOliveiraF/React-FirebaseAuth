import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Home from './Views/Home';
import Login from './Views/Login';
import Criar from './Views/Criar';
import EsqSenha from './Views/EsqSenha';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" component={Home} 
        options={{
          title: 'ACME',
          headerStyle: {
            backgroundColor: '#000000',
            
          },
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:42,
            
          
          },
        
        }}
         />

        <Stack.Screen name="Login" component={Login} 
          options={{
            title: 'Login de usuário',
            headerStyle: {
              backgroundColor: '#000000',
            },

            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
             
            },

           
          }}/>

        <Stack.Screen name="Criar" component={Criar}
          options={{
            title: 'Criando conta...',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
             
            },
          }} />

<Stack.Screen name="EsqSenha" component={EsqSenha}
          options={{
            title: 'Recuperando senha...',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
             
            },
          }} />
      


      </Stack.Navigator>
    </NavigationContainer>
  );
}

