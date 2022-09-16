import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

const topBar = () => {
  const theme = useSelector(state => state.theme.activeTheme);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        backgroundColor: theme === 'light' ? 'white' : 'black',
        justifyContent: 'space-between',
      }}>
      <View style={styles.view2}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 18,
            color: theme === 'light' ? 'black' : 'white',
          }}>
          {'Good evening'}
        </Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.margin}>
          <AntDesign
            name="bells"
            size={23}
            color={theme === 'light' ? 'black' : 'white'}
          />
        </View>
        <View style={styles.margin}>
          <AntDesign
            name="dashboard"
            size={23}
            color={theme === 'light' ? 'black' : 'white'}
          />
        </View>
        <View style={styles.margin}>
          <AntDesign
            name="setting"
            size={23}
            color={theme === 'light' ? 'black' : 'white'}
          />
        </View>
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
    fontSize: 18,
    color: 'white',
  },
  margin: {marginLeft: 17},
});

export default topBar;
