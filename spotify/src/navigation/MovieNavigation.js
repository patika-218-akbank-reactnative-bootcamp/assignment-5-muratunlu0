import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetails from '../screens/MovieDetails/MovieDetails';
import BottomNavigator from './BottomNavigator';
import {useSelector} from 'react-redux';

const MovieNavigaiton = () => {
  const Movie = createNativeStackNavigator();
  const theme = useSelector(state => state.theme.activeTheme);

  return (
    <Movie.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Movie.Screen name="BottomNavigator" component={BottomNavigator} />
      <Movie.Screen
        options={{
          headerShown: true,
          headerTintColor: theme === 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: theme === 'light' ? 'white' : 'black',
          },
        }}
        name="MovieDetails"
        component={MovieDetails}
      />
    </Movie.Navigator>
  );
};

export default MovieNavigaiton;
