import React, { Component } from 'react'
import { Text, StyleSheet, View, Button,Image,TouchableOpacity,TextInput } from 'react-native'

export default class Login extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            Password:''
        }
    }
  


    
    onSignIn=()=>{
       
        // alert(`email=${this.state.email} & Password=${this.state.Password }`)
        this.props.navigation.navigate('Signup')
   }
    render() {
        return (
        
        
            <View style={{flex:1 ,backgroundColor:'white'}}>
                 <View style={{flexDirection:'row',marginHorizontal:35,marginVertical:65,marginBottom:30}}>
                     <Text style={{fontSize:22,fontWeight:'bold',opacity: .8,}}>Sign In</Text>
                 </View>
                 <View>
                     <TextInput style={{borderWidth:1,marginHorizontal:'10%',paddingHorizontal:'5%',borderRadius:12}}  
                     placeholder='UserName or Email'
                     value={this.state.Email}
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
                <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:5 }}>
                    
                <View  style={{flexDirection:'row',justifyContent:'space-around',}} >
                    <View style={{width:12,height:12,borderWidth:1,marginVertical:5,marginHorizontal:5}}>
                        
                    </View>
                    
                    <Text style={{opacity:.9}}>Remember me</Text>
                    
                </View>
                <TouchableOpacity>
                <View>
                    <Text style={{opacity:.6}}>Forget Password?</Text>
                </View>
                </TouchableOpacity>
               
                </View>
                <View style={{marginVertical:55,marginHorizontal:35,}}>

                    {/* <Button 
                  style={{borderRadius:12}} title=" Sign In"/> */}
                  <TouchableOpacity
                      onPress={this.onSignIn}
                   style={{backgroundColor:'#007EA7',padding:20,borderRadius:8,marginVertical:'5%'}}>
                     <Text style={{fontSize:18,color:'white',textAlign:'center'}}>Sign In</Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginVertical:20}}>
                    <Text style={{textAlign:'center'}}>OR</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginHorizontal:70}}>
                    <TouchableOpacity>
                    <View > 
              <Image style={{width:30,height:30}} source={{uri:'https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png'}}/>
              </View>
                        
                    </TouchableOpacity>
             <TouchableOpacity>
             <View> 
              <Image style={{width:30,height:30}}source={{uri:'https://images.vexels.com/media/users/3/137283/isolated/preview/8ca486faebd822ddf4baf00321b16df1-google-icon-logo-by-vexels.png'}}/>
              </View>
             </TouchableOpacity>
             <TouchableOpacity>
             <View> 
             <Image style={{width:30,height:30}}source={{uri:'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png'}}/>
             </View>
             </TouchableOpacity>
              
           
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:220,}}>
                    <View>
                    <Text> Don't have account ?</Text>
                    </View>
                    <View style={{marginLeft:10}}>
                        <Text >
                        create one
                        </Text>
                    </View>
                </View>
            </View>
        
            
        )
    }
}

const styles = StyleSheet.create({})