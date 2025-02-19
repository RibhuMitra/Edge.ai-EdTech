import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Colors from './../../constant/Colors'
import { TextInput } from 'react-native';
import { router, useRouter } from "expo-router";

const MyComponent = () => {
  const router = useRouter(); };


export default function Signin() {
  return (
    <View  style={{
      display: 'flex',
      alignItems: 'center',
      paddingTop:100,
      flex: 1, 
      padding: 25,
      backgroundColor : Colors.WHITE
      
      
    }}>
      <Image source={require('./../../assets/images/iemuemneologo.png')}
      style={{
        width: 200,
        height: 150,
        borderRadius: 30,
        
      }}
      />
      <Text style={{
        marginTop : 10,
        fontSize: 25,
        fontFamily: 'outfit-bold',
      }}>Welcome Back Learner</Text>

      
      <TextInput placeholder='Email' style={styles.textInput}/>
      <TextInput placeholder='Password'  secureTextEntry={true} style={styles.textInput}/>

      <TouchableOpacity
        style={{
          padding:15,
          backgroundColor: Colors.PRIMARY,
          width: '100%',
          marginTop : 25,
          borderRadius: 10
        }}
      >
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 20,
          color: Colors.WHITE,
          textAlign: 'center'
        }}>Log In</Text>

      </TouchableOpacity>

      <View style={{
        display: 'flex',
        flexDirection: 'row', gap: 5,
        marginTop: 20
        }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Don't have an account?</Text>
        <Pressable 
        onPress={() => router.push('/auth/signup')}>
          <Text style={{
          color: Colors.PRIMARY,
          fontFamily: 'outfit-bold'
          }}>Sign Up Here</Text>
        </Pressable>
      
      </View>
      
     
    </View>
  )
}

const styles = StyleSheet.create({
  textInput : {
    borderWidth : 1,
    width: '100%',
    padding: 15,
    fontSize: 18,
    marginTop : 20,
    borderRadius : 10
  }
})