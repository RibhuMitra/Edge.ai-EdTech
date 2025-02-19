import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from './../constant/Colors';
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('./../assets/images/4401280.jpg')}
          style={styles.image}
        />
      </View>

      {/* Greyish to Black Gradient */}
      <LinearGradient colors={["#808080", "#000000"]} style={styles.gradient}>
        <Text style={styles.title}>Welcome to Edge.ai</Text>
        <Text style={styles.subtitle}>Where Learning Meets Recognition.</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/auth/signup')}>
          <Text style={[styles.buttonText, { color: "808080" }]}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.outlinedButton]} onPress={() => router.push('/auth/signin')}>
          <Text style={[styles.buttonText, { color: Colors.WHITE }]}>Already have an account</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Official Ed-Tech Partner Of many Global Universities and Institutions.
        </Text>

        <Text style={[styles.footerText, { marginTop: 80 }]}>© All Rights Reserved</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  imageContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginBottom: 30,
  },
  image: {
    width: 220,
    height: 180,
    borderRadius: 30,
  },
  gradient: {
    flex: 1,
    padding: 25,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.WHITE,
    fontFamily: 'outfit',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.WHITE,
    fontFamily: 'outfit',
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  outlinedButton: {
    borderWidth: 1,
    borderColor: Colors.WHITE,
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    fontSize: 15,
    textAlign: 'center',
    color: Colors.WHITE,
    fontFamily: 'outfit',
    marginTop: 80,
  },
});
