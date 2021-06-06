import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default class Task2 extends Component {
    constructor(){
        super()
        this.state={
            color:''
        }
    }
    render() {
        return (
            <View style={{backgroundColor:`${this.state.color}`,flex:1}}>
              <TextInput placeholder='color'
               onChangeText={(text)=>{
                  text===''?this.setstate({color:'red'}):this.setState({color:text})
              }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
