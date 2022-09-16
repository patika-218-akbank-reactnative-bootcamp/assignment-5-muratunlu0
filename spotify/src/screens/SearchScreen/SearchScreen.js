import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import styles from '../SearchScreen/SearchScreenStyle';
import axios from 'axios';
import CustomMovie from '../../components/CustomMovie/CustomMovie';
import {useSelector} from 'react-redux';
import TopBar from './TopBar';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [response, setResponse] = useState([]);
  const theme = useSelector(state => state.theme.activeTheme);

  const renderSearchItem = ({item}) => {
    return (
      <View style={{paddingHorizontal: 10}}>
        <CustomMovie
          uri={item.poster_path}
          Descirption={item.overview}
          MoiveTittle={item.title}
          vote_avage={item.vote_average}
        />
      </View>
    );
  };
  return (
    <View style={theme === 'light' ? null : styles.contain}>
      <TopBar />
      <TextInput
        style={{width: '92%', height: 40, alignSelf: 'center'}}
        left={
          <TextInput.Icon
            size={25}
            name="movie-search"
            onPress={async () => {
              await axios
                .get(
                  `${'https://api.themoviedb.org/3/search/movie?api_key=67c2b818143797a56bbc23d8cba1331e&language=en-US&query='}` +
                    `${search}` +
                    `${'&page=1&include_adult=false'}`,
                )
                .then(respo => {
                  setResponse(respo.data.results);
                  console.log(response);
                });
            }}
          />
        }
        value={search}
        placeholder={'What do you want to listen to?'}
        onChangeText={text => setSearch(text)}
        onBlur={async () => {
          await axios
            .get(
              `${'https://api.themoviedb.org/3/search/movie?api_key=67c2b818143797a56bbc23d8cba1331e&language=en-US&query='}` +
                `${search}` +
                `${'&page=1&include_adult=false'}`,
            )
            .then(respo => {
              setResponse(respo.data.results);
              console.log(response);
            });
        }}
      />
      <FlatList
        data={response}
        renderItem={renderSearchItem}
        keyExtractor={(item, index) => `seacrh-${item.id}`}
        maxToRenderPerBatch={10}
      />
    </View>
  );
};

export default SearchScreen;
