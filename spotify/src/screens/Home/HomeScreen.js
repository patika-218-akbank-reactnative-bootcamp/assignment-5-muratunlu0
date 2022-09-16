import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import CustomMovie from '../../components/CustomMovie/CustomMovie';
import {useSelector} from 'react-redux';
import styles from './HomeScreenStyle';
import TopBar from './TopBar';

const titledata = [
  {
    genre: 'top_rated',
    value: 'Top Rated',
  },
  {
    genre: 'now_playing',
    value: 'Now Playing',
  },
  {
    genre: 'popular',
    value: 'Popular',
  },
  {
    genre: 'upcoming',
    value: 'Up Coming',
  },
];
const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [genres, setGenres] = useState('top_rated');
  const {navigate} = useNavigation();
  const theme = useSelector(state => state.theme.activeTheme);
  const [refreshing, setRefreshing] = useState(true);
  const onRefresh = () => {
    //Clear old data of the list
    setPosts([]);
    //Call the Service to get the latest data
  };

  useEffect(() => {
    axios
      .get(
        `${'https://api.themoviedb.org/3/movie/'}` +
          `${genres}` +
          `${'?api_key=67c2b818143797a56bbc23d8cba1331e&language=en-US&page=1'}`,
      )
      .then(respo => {
        setPosts(respo.data.results);
        setRefreshing(false);
      });
  }, [genres]);

  const renderMovieItem = ({item}) => {
    return (
      <View style={{paddingHorizontal: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigate('MovieDetails', {
              backdrop_path: item.backdrop_path,
              descirption: item.overview,
              moviename: item.title,
              genres: item.genre_ids,
              release_date: item.release_date,
              vote_avage: item.vote_average,
              vote_count: item.vote_count,
              popularity: item.popularity,
            });
          }}>
          <View>
            <CustomMovie
              uri={item.poster_path}
              Descirption={item.overview}
              MoiveTittle={item.title}
              vote_avage={item.vote_average}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={theme === 'light' ? null : styles.contain}>
      <TopBar />
      <View style={{height: 50, width: '100%'}}>
        <ScrollView
          horizontal
          alwaysBounceHorizontal={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.scrolView}>
            {titledata.map((item, index) => {
              return (
                <View key={index} style={styles.genresView}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      textAlignVertical: 'center',
                      backgroundColor: theme === 'light' ? '#Bbbaba' : '#141414',
                      padding: 5,
                      borderRadius: 10,
                      color: theme === 'light' ? '#353434' : 'white',
                    }}
                    onPress={() => {
                      setGenres(item.genre);
                    }}>
                    {item.value}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={renderMovieItem}
        keyExtractor={(item, index) => `posts-${item.id}`}
        maxToRenderPerBatch={10}
      />
    </View>
  );
};

export default HomeScreen;
