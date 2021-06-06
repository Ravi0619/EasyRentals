import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(()=>this.props.navigation.navigate('Login'),6000)
    }
    
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                <Image style={{height:250,width:250}} source={require('../assets/image/logo.jpg.png')}/>
        
            </View>
        )
    }
}

const styles = StyleSheet.create({})
