import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {View, Text, StyleSheet} from 'react-native';

const topBar = () => {
  return (
    <View style={styles.view}>
      <View style={styles.view2}>
        <Text style={styles.text}>{'Search'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {

    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  view2: {display: 'flex', flexDirection: 'row'},
  text: {
    fontWeight: '600',
    fontSize: 19,
    color: 'white',
  },
  margin: {marginLeft: 17},
});

export default topBar;
