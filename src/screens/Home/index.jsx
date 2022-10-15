import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import List from '../../components/List';
import MusicPreview from '../../components/MusicPreview';
import Search from '../../components/Search';
// import { data } from '../../constants/data';
import API from '../../api';
import styles from './styles';
import { ErrorType } from '../../utils/ErrorType';

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState('');
  const [activeTrack, setActiveTrack] = useState({});

  const getSearchedData = async (value) => {
    try {
      const { data } = await API.get(`search?media=music&entity=song&term=${value}`);
      if (data?.results?.length) {
        setTracks(data.results);
      }
    } catch (error) {
      throw new Error(ErrorType(error));
    }
  };

  useEffect(() => {
    if (!search) {
      setTracks([]);
    }

    const debounceSearch = setTimeout(() => {
      getSearchedData(search);
    }, 3000);

    return () => clearTimeout(debounceSearch);
  }, [search]);

  return (
    <View>
      {tracks.length ? (
        <View style={styles.container}>
          <View style={styles.leftContiner}>
            <View style={styles.search}>
              <Search onChangeText={(text) => setSearch(text)} />
            </View>
            {tracks.length && (
              <View style={styles.list}>
                <List tracks={tracks} activeTrack={activeTrack} setActiveTrack={setActiveTrack} />
              </View>
            )}
          </View>
          <View style={styles.rightContainer}>
            <MusicPreview tracks={tracks} activeTrack={activeTrack} />
          </View>
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyScreenSearch}>
            <Search onChangeText={(text) => setSearch(text)} />
          </View>
          <View style={styles.emptyTextView}>
            <Text style={styles.emptyText}>Search your favourite tracks, artists or albums... </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Home;
