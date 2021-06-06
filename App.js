import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
// import Login from './src/assets/screen/Login'
// import  Signup from './src/assets/screen/Signup'
// import Task from './src/assets/screen/Task'
// import Task2 from './src/assets/screen/Task2'
 import AppNavigation from './src/Navigation/Index'   
// import Splash from './src/screen/Splash'
  

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
       {/* <View style={{flex:1}}>  */}
       {/* <Login/> */}
       {/* <Signup/> */}
       {/* <Task/> */}
       {/* <Task2/> */}
       <AppNavigation/>
       {/* <Splash/> */}
       </View>
      // </View>
    )
  }
}

const styles = StyleSheet.create({})
