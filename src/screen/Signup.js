import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,button,TouchableOpacity,TextInput, } from 'react-native'
import CheckBox from 'react-native-check-box'

export default class Signup extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            Password:'',
            isChecked:false
        }
    }
  


    
    onSignIn=()=>{
       
        alert(`email=${this.state.email} & Password=${this.state.Password }`)
   }
    render() {
        return (
            
            
            <View style={{flex:1 ,backgroundColor:'white'}}>
                 <View style={{flexDirection:'row',marginHorizontal:35,marginVertical:65,marginBottom:30}}>
                     <Text style={{fontSize:22,fontWeight:'bold',opacity: .8,}}>Sign Up</Text>
                 </View>
                 <View>
                     <TextInput style={{borderWidth:1,marginHorizontal:'10%',paddingHorizontal:'5%',borderRadius:12}}  
                     placeholder='UserName or Email'
                     value={this.state.email}
                     onChangeText={(text)=>{
                         this.setState({email:text})
                     }}
                     />
                 </View>
               <View>
               <TextInput value={this.state.Password}
             onChangeText={(text)=>{
                 this.setState({Password:text})
             }
            }
            
                 secureTextEntry
               
               style={{borderWidth:1,marginVertical:'5%',marginHorizontal:'10%',paddingHorizontal:'5%',borderRadius:12}}  
                     placeholder='PassWord'

                     
                     />
               </View>
               <View>
                     <TextInput style={{borderWidth:1,marginHorizontal:'10%',paddingHorizontal:'5%',borderRadius:12}}  
                     placeholder='conform Password'
                     value={this.state.email}
                     onChangeText={(text)=>{
                         this.setState({Password:text})
                     }}
                     />
                 </View>
                 
                
                 <View style={{flexDirection:'row'}}>
                 <View style={{flex:1}}>
                 <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    leftText={"CheckBox"}
/>
                 </View>
                 <View style={{flex:9}}>
                     <Text style={{color:'black',marginLeft:20,marginTop:5}}>By signingUp you understand the<Text onPress  style={{color:'blue'}}> term of service</Text> and <Text style={{color:'blue'}}>Privacy policy</Text></Text>
                 </View>
                 
                 </View>
                <View style={{marginVertical:55,marginHorizontal:35,}}>

                    {/* <Button 
                  style={{borderRadius:12}} title=" Sign In"/> */}
                  <TouchableOpacity
                      onPress={this.onSignIn}
                   style={{backgroundColor:'#007EA7',padding:20,borderRadius:8,marginVertical:'5%'}}>
                     <Text style={{fontSize:18,color:'white',textAlign:'center'}}>Sign up</Text>
                  </TouchableOpacity>
                </View>
              
                          
           </View>
               
          
           
        )
    }
}

const styles = StyleSheet.create({})
