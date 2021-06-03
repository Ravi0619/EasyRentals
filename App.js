import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Login from './src/assets/screen/Login'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
       <Login/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
