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
  ScrollView,
  Picker,
  
  Alert // Container component
} from "react-native";
import {Actions} from 'react-native-router-flux';
import { StackNavigator } from "react-navigation";
import DatePicker from 'react-native-datepicker';

const programmingLanguages = [
  {
    label: 'Baksa',
    value: 'Baksa',
  },
  {
    label: 'Barpeta',
    value: 'Barpeta',
  },
  {
    label: 'Nalbari',
    value: 'Nalbari',
  },
  {
    label: 'Chamata',
    value: 'Chamata',
  },
  {
    label: 'Pathsala',
    value: 'Pathsala',
  },
  {
    label: 'Tihu',
    value: 'Tihu',
  },
  {
    label: 'Kokrajhar',
    value: 'Kokrajhar',
  },
  {
    label: 'Goalpara',
    value: 'Goalpara',
  }
];

const hemletID = [
  {
    label: 'hemlet1',
    value: 'hemlet1',
  },
  {
    label: 'hemlet2',
    value: 'hemlet2',
  },
  {
    label: 'hemlet3',
    value: 'hemlet3',
  }
  
];

const marital = [
  {
    label: 'Single',
    value: 'Single',
  },
  {
    label: 'Married',
    value: 'Married',
  }
    
];

export default class mahilaprofile extends Component
{
 
 constructor(props) {
    super(props);
    this.state = {
      language: '',
      hemletid: '',
      maritals: '',
      date:"2016-05-15",
    };
  }
  // Setting up profile activity title.
   static navigationOptions =
   {
      title: 'Mahila Profile',
    
   };



    
 
   render()
   {
 
     const {goBack} = this.props.navigation;
 
      return(
         <ScrollView>
 
            <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>Mahila Profile Form</Text>
            <Text>Village ID</Text>
            <Picker
            selectedValue={this.state.language}
            placeholder="Village ID"
            onValueChange={itemValue => this.setState({ language: itemValue })}>
            {programmingLanguages.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>

          <Text>Hemlet ID</Text>
            <Picker
            selectedValue={this.state.hemletid}
            placeholder="Hemlet ID"
            onValueChange={itemValue => this.setState({ hemletid: itemValue })}>
            {hemletID.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>


  
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter  Name"
 
          onChangeText={UserName => this.setState({UserName})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Father Name"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Mother Name"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter DOB(dd/mm/yyyy)"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Religion"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <Text>Marital Status</Text>
            <Picker
            selectedValue={this.state.maritals}
            placeholder="Hemlet ID"
            onValueChange={itemValue => this.setState({ maritals: itemValue })}>
            {marital.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Husband Name"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Total Family Member"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Male Number"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Female Number"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Education"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Address"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Adhar Number"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter VoterId Number"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        

        <Button title="Click Here To Save" onPress={this.UserRegistrationFunction} color="#2196F3" />
 
         </ScrollView>
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
 
 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center', 
  marginBottom: 15
 }
});