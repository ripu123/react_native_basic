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
  Keyboard,
  Alert // Container component
} from "react-native";
import {Actions} from 'react-native-router-flux';
import { StackNavigator } from "react-navigation";
//import Spinner from "react-native-loading-spinner-overlay";

export default class Login extends Component {
 static navigationOptions= ({navigation}) =>({
      title: 'Login', 
      headerRight:  
      <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
      style={{margin:10,backgroundColor:'orange',padding:10}}>
      <Text style={{color:'#ffffff'}}>Home</Text>
      </TouchableOpacity>
    
  });  
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }

  signup() {
        Actions.signup()
    }
 
UserLoginFunction = () =>{
 
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 
 if(UserEmail == '' || UserPassword == '')
{
  Alert.alert("Please Enter All the Values.");
}
else{
 
fetch('http://192.168.43.155:82/sesta/User_Login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: UserEmail,
 
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Profile', { Email: UserEmail });
              //this.props.navigation.navigate("Profile");
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
 
 }
  }
 
  render() {
    return (
 
<View style={styles.MainContainer}>
 
        <Text style= {styles.TextComponentStyle}>User Login Form</Text>
  
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Email"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Password"
 
          onChangeText={UserPassword => this.setState({UserPassword})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
 
          secureTextEntry={true}
        />
 
        <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />
        
 
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
 signupTextCont: {
      
      
      paddingVertical: 8,
      
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
 
 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center', 
  marginBottom: 15
 }
});

AppRegistry.registerComponent("Login", () => Login);
