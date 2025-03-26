import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, ImageBackground, ScrollView, ToastAndroid } from 'react-native';
import bgblur from './../../assets/images/bgblur2.png';
import React, { useContext, useState } from 'react';
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './../../config/firebaseConfig'
import { getDoc } from 'firebase/firestore';
import { doc } from "firebase/firestore";
import { UserDetailContext } from '../../context/UserDetailContext';
import { ActivityIndicator } from 'react-native';


export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [loading, setLoading] = useState(false);

  const onSignInClick = () => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then(async(resp) => {
      const user = resp.user
      console.log(user)
      await getUserDetail();
      setLoading(false);
      router.replace('/(tabs)/home')
    }).catch(e => {
      console.log(e)
      setLoading(false);
      ToastAndroid.show('Incorrect Email & Password', ToastAndroid.BOTTOM)
    })

  }

  const getUserDetail = async() => {
    const result =await getDoc(doc(db, 'users', email));
    console.log(result.data())
    setUserDetail(result.data())
  }

  return (
    <ImageBackground source={bgblur} style={styles.backgroundImage}>
          <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" onChangeText={(value)=>setEmail(value)} style={styles.textInput} placeholderTextColor='grey' autoCapitalize="none" keyboardType="email-address" />
        <TextInput placeholder="Password" onChangeText={(value)=>setPassword(value)} secureTextEntry={true} placeholderTextColor='grey' style={styles.textInput} autoCapitalize="none" />
      </View>

      
      <TouchableOpacity onPress={onSignInClick} disabled={loading} style={styles.button}>
        <LinearGradient colors={['#333333', '#000000']} style={styles.buttonGradient}>
        {loading ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.buttonText}>Log In</Text>}
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <Pressable onPress={() => router.push('/auth/signup')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </Pressable>
      </View>
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
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
    color: 'black',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'outfit',
    color: 'black',
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
    borderRadius: 15,
    backgroundColor: 'rgba(150, 146, 146, 0.1)',
    color: 'black',
  },
  button: {
    width: '100%',
    borderRadius: 25,
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
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: 'grey',
    fontSize: 14,
  },
  signupLink: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
});




