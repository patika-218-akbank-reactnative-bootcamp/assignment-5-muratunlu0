import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';

const AuthNavigation = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Sign Up',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
        name="SignUp"
        component={SignUp}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
