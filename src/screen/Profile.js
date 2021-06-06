import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Profile extends Component {
    render() {
        return (
            <View>
                 <Icon
                name='user-circle'
                color='black'
                size={40}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
