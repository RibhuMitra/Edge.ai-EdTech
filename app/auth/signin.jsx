import { View, Text, Image, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from './../../constant/Colors';
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Signin() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#FFFFFF', '#000000']} style={styles.container}>
      <Image source={require('./../../assets/images/iemuemneologo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome Back Learner</Text>

      <TextInput placeholder="Email" style={styles.textInput} autoCapitalize="none" keyboardType="email-address" />
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.textInput} autoCapitalize="none" />

      {/* Black Button with White Text */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <Pressable onPress={() => router.push('/auth/signup')}>
          <Text style={styles.signupLink}>Sign Up Here</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: 100,
    padding: 25,
  },
  logo: {
    width: 200,
    height: 150,
    borderRadius: 30,
  },
  title: {
    marginTop: 10,
    fontSize: 25,
    fontFamily: 'outfit-bold',
    color: 'white', // White text for contrast
  },
  textInput: {
    
    width: '100%',
    padding: 12,
    fontSize: 18,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    backgroundColor: 'transparent', // Transpare background for readability
    color: 'white',
  },
  button: {
    backgroundColor: 'black', // Black button background
    padding: 15,
    width: '100%',
    marginTop: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'outfit',
    fontSize: 20,
    color: 'white', // White text for contrast
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    fontFamily: 'outfit',
    color: 'white',
  },
  signupLink: {
    color: 'white',
    fontFamily: 'outfit-bold',
    marginLeft: 5,
    textDecorationLine: 'underline', // Underline for emphasis
  },
});
