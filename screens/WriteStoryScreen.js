import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image,KeyboardAvoidingView,ToastAndroid } from 'react-native';
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebase from 'firebase'
import db from "../config"

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
title:'',
author:'',
storyText:''
        }
    }
  /*  submitStory=()=>{
        var sumbmit
        db.collection("story").doc(this.state.story).get()
        .then((doc)=>{
            var story=doc.data()
        })
    }*/
    render(){
        return(
            <KeyboardAvoidingView>
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    placeholder="Title"
                    onChangeText={(text)=>{
                        this.setState({
                            title:text
                        })
                    }}
                    value={this.state.title}>
                    </TextInput>

                    <TextInput style={styles.inputBox}
                    placeholder="Author"
                    onChangeText={(text)=>{
                        this.setState({
                            title:text
                        })
                    }}
                    value={this.state.author}>
                    </TextInput>

                    <TextInput style={styles.inputBox}
                    placeholder="Story Text"
                    onChangeText={(text)=>{
                        this.setState({
                            title:text
                        })
                    }}
                    value={this.state.storyText}>
                    </TextInput>
                    <TouchableOpacity style={styles.submitButton} onPress={this.submitStory} onPress={ToastAndroid.show("Submited",ToastAndroid.SHORT)}>
<Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"green",
    },
    inputBox:{
        fontSize:20,
        width:150,
        height:100,
    },
    submitButton:{
        backgroundColor:"blue",
        width:200,
        height:100,
    },
    buttonText:{
        fontSize:25, 
        fontStyle:'bold'
    }
})