import React, { Component } from 'react'
import { Text, StyleSheet, View,Button, TouchableOpacity } from 'react-native'

export default class Task extends Component {
    constructor(){
    super()
    this.state={
       value:0
        
        
    }
   
    
  
    
    
    }
    increase=()=>{
        this.setState({value:this.state.value+1})
    }
    decrease=()=>{
        this.setState({value:this.state.value-1})
    }
    render() {
        return (
           
                
                <View style={{flex:1}}>
                <Text style={{fontSize:100,textAlign:'center'}}>
                    {this.state.value}
                </Text>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:'20%'}}>
                    <TouchableOpacity 
                    onPress={this.increase}
                    
                    style={{backgroundColor:'red'}}>
                        <Text style={{color:'white',fontSize:40}}>increase</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.decrease}
                     style={{backgroundColor:'green'}}>
                        <Text style={{color:'white',fontSize:40}}>decrease</Text>
                    </TouchableOpacity>
                </View>
               

                </View>
                
                
        )
    }
}

const styles = StyleSheet.create({})
