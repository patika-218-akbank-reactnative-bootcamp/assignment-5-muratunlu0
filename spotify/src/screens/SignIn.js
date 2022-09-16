import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {View, StyleSheet, Pressable, Text, Image, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CustomButton from '../components/CustomButton';
import {useDispatch} from 'react-redux';
import {setUser} from '../store';
import CustomInput from '../components/CustomInput';

const SignIn = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    mail: '',
    password: '',
  });
  const {navigate} = useNavigation();
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = async () => {
    await axios
      .get('http://10.0.2.2:3000/register')
      .then(res => {
        res.data.map(item => {
          if (
            item.mail === userInfo.mail &&
            item.password === userInfo.password
          ) {
            AsyncStorage.setItem('userStorage', JSON.stringify(item));
            AsyncStorage.getItem('userStorage').then(parserespo => {
              const parsedata = JSON.parse(parserespo);
              console.log('parserespo', parserespo);

              dispatch(
                setUser({
                  mail: parsedata.mail,
                  password: parsedata.password,
                  id: parsedata.id,
                }),
              );
            });
          }
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    AsyncStorage.getItem('userStorage')
      .then(parserespo => {
        const parsedata = JSON.parse(parserespo);
        console.log('parserespo', parserespo);

        dispatch(
          setUser({
            mail: parsedata.mail,
            password: parsedata.password,
            id: parsedata.id,
          }),
        );
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/savas-delisi.appspot.com/o/ss2.png?alt=media&token=6fd8383c-ffad-49cf-9f5a-8fbd3bc4d71e',
        }}
      />
      <View style={styles.view2}>
        <CustomInput
          placeholder="mail"
          value={userInfo.mail}
          onChangeText={text => {
            setUserInfo({...userInfo, mail: text});
          }}
        />

        <CustomInput
          placeholder="password"
          value={userInfo.password}
          onChangeText={text => {
            setUserInfo({...userInfo, password: text});
          }}
          secureTextEntry={showPassword}
        />
        <CustomButton
          title={'Sign In'}
          onPress={() => {
            handleLogin();
          }}
        />
        <Pressable
          onPress={() => {
            navigate('SignUp');
          }}>
          <Text>Don't have an account yet</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  view: {
    flex: 1,
    backgroundColor: 'e8e8e8',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  view2: {
    width: '100%',
    height: 280,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
});
export default SignIn;
