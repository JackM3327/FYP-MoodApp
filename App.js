import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import firebase from 'firebase'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

// const firebaseConfig = {
//   apiKey: "AIzaSyD3oaWp4K4bcfaNwqw0djpQRa1L_MDBjEM",
//   authDomain: "fyp-moodapp.firebaseapp.com",
//   projectId: "fyp-moodapp",
//   storageBucket: "fyp-moodapp.appspot.com",
//   messagingSenderId: "681983210406",
//   appId: "1:681983210406:web:fc8c3a5cb28cbb70255567",
//   measurementId: "G-4EH03272C6"
// };

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig)
// }

import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import MainScreen from './components/Main'
import AddEntryScreen from './components/main/AddEntry'
import SettingsScreen from './components/main/Settings'
import InformationScreen from './components/main/Information'
import ViewEntryScreen from './components/main/ViewEntry'
import AchievementsScreen from './components/main/Achievements'

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
        </View>
    )
    }
    if (!loggedIn){
      return(
      <NavigationContainer> 
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
      )}
     
    return(
      <NavigationContainer> 
     <Provider store={store}>
       <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AddEntry" component={AddEntryScreen}/>
        <Stack.Screen name="ViewEntry" component={ViewEntryScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
        <Stack.Screen name="Information" component={InformationScreen}/>
        <Stack.Screen name="Achievements" component={AchievementsScreen}/>
      </Stack.Navigator>
     </Provider>
     </NavigationContainer> 
    )
  }
}

export default App
