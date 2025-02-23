import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Signin() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#FFFFFF', '#000000']} style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.textInput} placeholderTextColor='white' autoCapitalize="none" keyboardType="email-address" />
        <TextInput placeholder="Password" secureTextEntry={true} placeholderTextColor='white' style={styles.textInput} autoCapitalize="none" />
      </View>

      {/* Improved Button */}
      <TouchableOpacity style={styles.button}>
        <LinearGradient colors={['#333333', '#000000']} style={styles.buttonGradient}>
          <Text style={styles.buttonText}>Log In</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <Pressable onPress={() => router.push('/auth/signup')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  header: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontSize: 60,
    fontFamily: 'nico',
    color: '#fff',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'outfit',
    color: '#fff',
    textAlign: 'left',
    marginTop: 5,
  },
  inputContainer: {
    width: '100%',
  },
  textInput: {
    width: '100%',
    padding: 15,
    fontSize: 16,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
  },
  button: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
  },
  buttonGradient: {
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#ccc',
    fontSize: 14,
  },
  signupLink: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
});
