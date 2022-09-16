import React, {useState} from 'react';
import {Alert} from 'react-native';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB1EQgsJ6qmG7bis1-kZheObwRKun_dB4c',
  authDomain: 'spotifyclone-cb704.firebaseapp.com',
  projectId: 'spotifyclone-cb704',
  storageBucket: 'spotifyclone-cb704.appspot.com',
  messagingSenderId: '438148983380',
  appId: '1:438148983380:web:d8003a77f51b76f97adbc1',
  measurementId: 'G-NK8STZPCQL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignUp = () => {
  const [checked, setChecked] = useState(false);

  const [showPassword, setShowPassword] = useState(true);
  const [registerTeam, setRegisterTeam] = useState({
    mail: '',
    password: '',
    confirmPassword: '',
  });
  const handleClick = async () => {
    try {
      if (registerTeam.password === registerTeam.confirmPassword) {
        if (registerTeam.mail !== '') {
          // createUserWithEmailAndPassword(
          //   auth,
          //   registerTeam.mail,
          //   registerTeam.password,
          // )
          //   .then(userCredential => {
          //     // Signed in
          //     const user = userCredential.user;
          //     Alert.alert('welcome to SpotifyClone: ' + user.uid);
          //   })
          //   .catch(error => {
          //     const errorCode = error.code;
          //     const errorMessage = error.message;
          //     // ..
          //   });
        }
      } else {
        Alert.alert('Password match error');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <SafeAreaView style={styles.View}>
      <CustomInput
        placeholder="E-mail"
        value={registerTeam.mail}
        onChangeText={text => {
          setRegisterTeam({...registerTeam, mail: text});
        }}
      />
      <View style={{height: 10}}></View>
      <CustomInput
        placeholder="Password"
        value={registerTeam.password}
        onChangeText={text => {
          setRegisterTeam({...registerTeam, password: text});
        }}
        secureTextEntry={showPassword}
      />
      <View style={{height: 10}}></View>
      <CustomInput
        placeholder="Confirm Password"
        value={registerTeam.confirmPassword}
        onChangeText={text => {
          setRegisterTeam({...registerTeam, confirmPassword: text});
        }}
        secureTextEntry={showPassword}
      />
      <View style={{height: 20}}></View>
      <CustomButton
        title={'Sign Up'}
        disabled={!checked}
        onPress={() => {
          handleClick();
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default SignUp;
