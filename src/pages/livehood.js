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
  Picker,
  ScrollView,
  Alert // Container component
} from "react-native";
import {Actions} from 'react-native-router-flux';
import { StackNavigator } from "react-navigation";

const programmingLanguages = [
  {
    label: 'Assam',
    value: 'Assam',
  },
  {
    label: 'Arunachal',
    value: 'Arunachal',
  },
  {
    label: 'Bihar',
    value: 'Bihar',
  }
  
];


const district = [
  {
    label: 'Kamrup',
    value: 'Kamrup',
  },
  {
    label: 'Nalbari',
    value: 'Nalbari',
  },
  {
    label: 'Barpeta',
    value: 'Barpeta',
  }
  
];

const block = [
  {
    label: 'Kamrup',
    value: 'Kamrup',
  },
  {
    label: 'Nalbari',
    value: 'Nalbari',
  },
  {
    label: 'Barpeta',
    value: 'Barpeta',
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

const villageID = [
  {
    label: 'village1',
    value: 'village1',
  },
  {
    label: 'village2',
    value: 'village2',
  },
  {
    label: 'village3',
    value: 'village3',
  }
  
];

const marital = [
  {
    label: 'Mahila1',
    value: 'Mahila1',
  },
  {
    label: 'Mahila2',
    value: 'Mahila2',
  }
    
];


export default class livehood extends Component
{
 
 constructor(props) {
    super(props);
    this.state = {
      language: '',
      hemletid: '',
      maritals: '',
      villages: '',
      districts:'',
      blocks: '',
    };
  }
  // Setting up profile activity title.
   static navigationOptions =
   {
      title: 'Livehood Tracker',
    
   };
    
 
   render()
   {
 
     const {goBack} = this.props.navigation;
 
      return(
         <ScrollView>
 
            <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>Livehood Form</Text>
  
        <Text>State</Text>
            <Picker
            selectedValue={this.state.language}
            placeholder="state"
            onValueChange={itemValue => this.setState({ language: itemValue })}>
            {programmingLanguages.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>

          <Text>District</Text>
            <Picker
            selectedValue={this.state.language}
            placeholder="district"
            onValueChange={itemValue => this.setState({ districts: itemValue })}>
            {district.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>

          <Text>Block</Text>
            <Picker
            selectedValue={this.state.language}
            placeholder="block"
            onValueChange={itemValue => this.setState({ blocks: itemValue })}>
            {block.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>

          <Text>Village</Text>
            <Picker
            selectedValue={this.state.language}
            placeholder="village"
            onValueChange={itemValue => this.setState({ villages: itemValue })}>
            {villageID.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>

          <Text>Hemlet</Text>
            <Picker
            selectedValue={this.state.language}
            placeholder="village"
            onValueChange={itemValue => this.setState({ hemletid: itemValue })}>
            {hemletID.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>

          <Text>Mahila</Text>
            <Picker
            selectedValue={this.state.language}
            placeholder="village"
            onValueChange={itemValue => this.setState({ maritals: itemValue })}>
            {marital.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>

        

        <Button title="Click Here To Track" onPress={this.UserRegistrationFunction} color="#2196F3" />
 
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