
import { StyleSheet } from "react-native";



const css = StyleSheet.create({

    
   container:{
    flex:1,
    justifyContent:`center`,
    alignItems:`center`,
    
   },

   viewHome:{
        marginTop:200,
        marginBottom:200,
        backgroundColor:'#fff',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
   },

   but1:{
    padding:12,
    backgroundColor:`#1E90FF`,
    alignSelf:`center`,
    borderRadius:5,
    marginTop:12,
    
   },

   butForgot:{
    backgroundColor : `FFF`,
    fontSize: 10,
    marginLeft: 70,
   },

bv_Text:{
    
    fontWeight:`bold`,
    fontSize:32,
    marginLeft:25,
    marginBottom:40,
  

},

    darkbg:{
        backgroundColor:`#FFD700`
    },

    login_form:{
        width:`50%`,
    },

    login_input:{
        backgroundColor:`#fff`,
        fontSize:19,
        padding:7,
        marginBottom:20,
        borderRadius:20,
    },

    login_button:{
        padding:12,
        backgroundColor:`#1E90FF`,
        alignSelf:`center`,
        borderRadius:5
    },

    login_buttonText:{
        fontWeight:`bold`,
        fontSize:22,
        color:`#333`
    
    },



    attentionPassword:{
        color:'#333',
    }

});

export{css};