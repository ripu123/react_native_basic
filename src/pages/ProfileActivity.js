import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View,
  Button,
  Alert // Container component
} from "react-native";
import {Actions} from 'react-native-router-flux';
import { StackNavigator } from "react-navigation";

export default class ProfileActivity extends Component
{
 
  // Setting up profile activity title.
   static navigationOptions =
   {
      title: 'ProfileActivity',
    
   };
    
 
   render()
   {

    const { navigate } = this.props.navigation;
 
     const {goBack} = this.props.navigation;
 
      return(
         <View style = { styles.MainContainer }>
 
            <Text style = {styles.TextComponentStyle}>Welcome: { this.props.navigation.state.params.Email } </Text>

 
            <Button title="Click here to Logout" onPress={ () => goBack(null) } />

            <TouchableOpacity
            onPress={() => navigate('MahilaProfile')}
            style={styles.btn3}>
            <Text style={styles.btnText}>Mahila Profile</Text>
            </TouchableOpacity>
            
            <TouchableOpacity   
            onPress={()=> navigate('Livehood')}
            style={styles.btn4}>
            <Text style={styles.btnText}>Livehood Tracker</Text>
            </TouchableOpacity>
 
         </View>
      );
   }
}

const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10,
},
 btn3:{
    backgroundColor:'orange',
    padding:10,margin:10,width:'95%',
    color:'#fff', textAlign:'center'
  },
  btn4:{
    backgroundColor:'blue',
    padding:10,margin:10,width:'95%',
    color:'#fff', textAlign:'center'
  },
TextInputStyleClass: {
 
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#2196F3',
 
 // Set border Radius.
 borderRadius: 5 ,
 
},
 btnText:{
    color:'#fff',fontWeight:'bold'
  },
 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center', 
  marginBottom: 15
 }
});