import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import bgblur from './../../assets/images/bgblur2.png';
import React, { useContext, useState } from 'react';
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../config/firebaseConfig';
import { setDoc, doc } from "firebase/firestore";
import { UserDetailContext } from './../../context/UserDetailContext';

export default function Signup() {
  const router = useRouter();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setUserDetail } = useContext(UserDetailContext);

  const CreateNewAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (resp) => {
        const user = resp.user;
        console.log(user);
        await SaveUser(user);
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  const SaveUser = async (user) => {
    const data = {
      name: fullName,
      email: email,
      member: false,
      uid: user?.uid
    };
    await setDoc(doc(db, 'users', email), data);
    setUserDetail(data);
  };

  return (
    <ImageBackground source={bgblur} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Get Started</Text>
          <Text style={styles.subtitle}>Create a new account</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Full Name"
            onChangeText={(value) => setFullName(value)}
            style={styles.textInput}
            placeholderTextColor="grey"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Email"
            onChangeText={(value) => setEmail(value)}
            style={styles.textInput}
            placeholderTextColor="grey"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
            placeholderTextColor="grey"
            style={styles.textInput}
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity onPress={CreateNewAccount} style={styles.button}>
          <LinearGradient colors={['#333333', '#000000']} style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Create Account</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <Pressable onPress={() => router.push('/auth/signin')}>
            <Text style={styles.signupLink}>Sign In</Text>
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
    textAlign: 'center',
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






/* import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Image } from 'react-native';
import bgblur from './../../assets/images/bgblur.png';
import React, { useContext, useState } from 'react';
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../config/firebaseConfig';
import { setDoc, doc } from "firebase/firestore";
import { UserDetailContext } from './../../context/UserDetailContext';

 export default function Signup() {
  const router = useRouter();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { userDetail, setUserDetail} = useContext(UserDetailContext)


  const CreateNewAccount = () => {
    createUserWithEmailAndPassword(auth,email,password)
    .then(async(resp) => {
      const user = resp.user;
      console.log(user);
      await SaveUser(user);
      //Save User to Database
    })
    .catch(e => {
      console.log(e.message);
    })

  }

  const SaveUser = async(user) => {
    const data = {
      name: fullName,
      email: email,
      member: false,
      uid: user?.uid
    }    
    await setDoc(doc(db,'users',email), data)

    setUserDetail(data);

    // Navigate to New Screen
  } 

  return (
    <View >
      <Image source={bgblur} style={styles.backgroundImage} /> 

      <View style={styles.header}>
        <Text style={styles.title}>Get Started</Text>
        <Text style={styles.subtitle}>Create a new account</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Full Name" onChangeText={(value)=>setFullName(value)} style={styles.textInput} placeholderTextColor='grey' autoCapitalize="none" />
        <TextInput placeholder="Email" onChangeText={(value)=>setEmail(value)} style={styles.textInput} placeholderTextColor='grey' autoCapitalize="none" keyboardType="email-address" />
        <TextInput placeholder="Password" onChangeText={(value)=>setPassword(value)} secureTextEntry={true} placeholderTextColor='grey' style={styles.textInput} autoCapitalize="none" />
      </View>

      <TouchableOpacity onPress={CreateNewAccount} style={styles.button}>
        <LinearGradient colors={['#333333', '#000000']} style={styles.buttonGradient}>
          <Text style={styles.buttonText}>Create Account</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <Pressable onPress={() => router.push('/auth/signin')}>
          <Text style={styles.signupLink}>Sign In</Text>
        </Pressable>
      </View>
    </View>
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
    borderRadius: 10,
    backgroundColor: 'rgba(95, 92, 92, 0.1)',
    color: 'black',
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
*/
/* 
return (
  <LinearGradient colors={['#FFFFFF', '#FFFFFF']} style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Get Started</Text>
      <Text style={styles.subtitle}>Create a new account</Text>
    </View>

    <View style={styles.inputContainer}>
      <TextInput placeholder="Full Name" onChangeText={(value)=>setFullName(value)} style={styles.textInput} placeholderTextColor='grey' autoCapitalize="none" />
      <TextInput placeholder="Email" onChangeText={(value)=>setEmail(value)} style={styles.textInput} placeholderTextColor='grey' autoCapitalize="none" keyboardType="email-address" />
      <TextInput placeholder="Password" onChangeText={(value)=>setPassword(value)} secureTextEntry={true} placeholderTextColor='grey' style={styles.textInput} autoCapitalize="none" />
    </View>

    <TouchableOpacity onPress={CreateNewAccount} style={styles.button}>
      <LinearGradient colors={['#333333', '#000000']} style={styles.buttonGradient}>
        <Text style={styles.buttonText}>Create Account</Text>
      </LinearGradient>
    </TouchableOpacity>

    <View style={styles.signupContainer}>
      <Text style={styles.signupText}>Already have an account?</Text>
      <Pressable onPress={() => router.push('/auth/signin')}>
        <Text style={styles.signupLink}>Sign In</Text>
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
  borderRadius: 10,
  backgroundColor: 'rgba(95, 92, 92, 0.1)',
  color: 'black',
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
*/





/*import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, ImageBackground, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import bgblur from './../../assets/images/bgblur2.png';

import React, { useContext, useState } from 'react';
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../config/firebaseConfig';
import { setDoc, doc } from "firebase/firestore";
import { UserDetailContext } from './../../context/UserDetailContext';

export default function Signup() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserDetail } = useContext(UserDetailContext);

  const CreateNewAccount = () => {
    if (!fullName || !email || !password) {
      alert("All fields are required!");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (resp) => {
        const user = resp.user;
        console.log(user);
        await SaveUser(user);
      })
      .catch(e => {
        let errorMessage = "Something went wrong!";
        if (e.code === "auth/email-already-in-use") {
          errorMessage = "This email is already in use.";
        } else if (e.code === "auth/weak-password") {
          errorMessage = "Password should be at least 6 characters.";
        }
        alert(errorMessage);
      });
  };

  const SaveUser = async (user) => {
    const data = {
      name: fullName,
      email: email,
      member: false,
      uid: user?.uid
    };
    await setDoc(doc(db, 'users', user.uid), data);
    setUserDetail(data);
  };

  return (
    <ImageBackground source={bgblur} style={styles.backgroundImage}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Get Started</Text>
            <Text style={styles.subtitle}>Create a new account</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Full Name"
              onChangeText={(value) => setFullName(value)}
              style={styles.textInput}
              placeholderTextColor="grey"
              autoCapitalize="words"
            />
            <TextInput
              placeholder="Email"
              onChangeText={(value) => setEmail(value)}
              style={styles.textInput}
              placeholderTextColor="grey"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Password"
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
              placeholderTextColor="grey"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity onPress={CreateNewAccount} style={styles.button}>
            <LinearGradient colors={['#333333', '#000000']} style={styles.buttonGradient}>
              <Text style={styles.buttonText}>Create Account</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <Pressable onPress={() => router.push('/auth/signin')}>
              <Text style={styles.signupLink}>Sign In</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    textAlign: 'center',
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
*/