import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Setting extends Component {
    render() {
        return (
            <View>
                 <Icon
                name='cog'
                color='black'
                size={40}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
