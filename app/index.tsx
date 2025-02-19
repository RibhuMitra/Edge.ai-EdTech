import { Image, Text, View, } from "react-native";
import Colors from './../constant/Colors'
import { router, useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const MyComponent = () => {
  const router = useRouter(); };
  

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE
      }}
    >
    <View  style={{
          display: 'flex',
          marginTop : 50,
          justifyContent: 'center',
          alignItems: 'center',
          height: 200,
          marginBottom : 30
        }}>
          <Image source={require('./../assets/images/iemuemneologo.png')}
          style={{
            width: 220,
            height: 180,
            borderRadius: 30,
            
          }}
          />

<Text style={{
      fontSize : 15,
      textAlign: 'center',
      color : 'black',
      fontWeight: '700',
      fontFamily: 'outfit',
      marginTop : 10   
    }}>Powered By CST-CSIT Dept.</Text>
        </View>
    

    <View style={{
      padding : 25,
      backgroundColor : Colors.PRIMARY,
      height : '100%',
      borderTopLeftRadius : 35,
      borderTopRightRadius : 35
    }}>

    <Text style={{
      fontSize : 30,
      fontWeight: '600',
      textAlign: 'center',
      color : Colors.WHITE,
      fontFamily: 'outfit'
    }}>Welcome to IEMEdge.ai</Text>

    <Text style={{
      fontSize : 20,
      textAlign: 'center',
      color : Colors.WHITE,
      fontFamily: 'outfit',
      marginTop : 20,
      marginBottom : 20
    }}>Where Learning Meets Recognition.</Text>



    <TouchableOpacity style={styles.button} 
    onPress={() => router.push('/auth/signup')} >
      <Text style={[styles.buttonText, { color: Colors.PRIMARY}]}>Get Started</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.button, {borderWidth : 1,
      borderColor : Colors.WHITE,
      backgroundColor : Colors.PRIMARY}
      ]} onPress={() => router.push('/auth/signin')}>
      <Text style={[styles.buttonText, {color : Colors.WHITE}]}>Already have an account</Text>
    </TouchableOpacity>

    <Text style={{
      fontSize : 15,
      textAlign: 'center',
      color : Colors.WHITE,
      fontFamily: 'outfit',
      marginTop : 80
    }}>Official Ed-Tech Partner Of University Of Engineering & Management</Text>

    

    <Text style={{
      fontSize : 15,
      textAlign: 'center',
      color : Colors.WHITE,
      fontFamily: 'outfit',
      marginTop :80
    }}>© All Copy rights reserved</Text>

    </View>

    


    </View>
  );
}


const styles = StyleSheet.create({
  button : {
    padding : 15,
    backgroundColor : Colors.WHITE,
    borderRadius : 18,
    marginTop: 20,
    justifyContent:'center',

  },
  buttonText : {
    fontSize : 15,
    
    fontWeight : '600', 
    textAlign : 'center',
  }
})