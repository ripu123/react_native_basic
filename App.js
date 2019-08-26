import React,{ Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button, TextInput, StatusBar } from 'react-native';

// Importing Stack Navigator library to add multiple activities.
import { createStackNavigator , createAppContainer} from 'react-navigation';

// Creating Login Activity.
//import Routes from './src/Routes';
import HomeScreen from './src/pages/home';
import Login from './src/pages/Login';
import Register from './src/pages/Signup';
import Profile from './src/pages/ProfileActivity';
import MahilaProfile from './src/pages/mahilaprofile';
import Livehood from './src/pages/livehood';

const UsersManager = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: Login },
  Register: {screen: Register},
  Profile: {screen: Profile},
  MahilaProfile:{screen: MahilaProfile},
  Livehood:{screen: Livehood}
 });

/*export default class App extends Component   {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#002f6c" 
          barStyle="light-content"
        />
        <Routes/>
      </View>
    );
  }
}*/
 

    
 

//export default UsersManager;
const App = createAppContainer(UsersManager);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'orange'
  }
});