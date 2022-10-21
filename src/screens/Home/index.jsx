import { useState, useEffect, useRef } from 'react';
import { View, Text, Alert } from 'react-native';
import List from '../../components/List';
import MusicPreview from '../../components/MusicPreview';
import Search from '../../components/Search';
import API from '../../api';
import styles from './styles';
import { ErrorType } from '../../utils/ErrorType';
import { useToast } from 'native-base';

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState('');
  const [activeTrack, setActiveTrack] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const toast = useToast();

  const getSearchedData = async (value) => {
    try {
      const { data } = await API.get(`search?media=music&entity=song&term=${value}`);
      if (data?.results?.length) {
        setTracks(data.results);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      toast.show({
        description: ErrorType(error),
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!search) {
      setIsLoading(false);
      setTracks([]);
    } else {
      setIsLoading(true);
      const debounceSearch = setTimeout(() => {
        getSearchedData(search);
      }, 3000);

      return () => clearTimeout(debounceSearch);
    }
    setIsError(false);
  }, [search]);

  return (
    <View>
      {tracks.length ? (
        <View style={styles.container}>
          <View style={Object.keys(activeTrack).length ? styles.leftContiner : styles.leftContinerFull}>
            <View style={Object.keys(activeTrack).length ? styles.search : styles.searchFull}>
              <Search onChangeText={(text) => setSearch(text)} />
            </View>
            {tracks.length && (
              <View style={styles.list}>
                <List tracks={tracks} activeTrack={activeTrack} setActiveTrack={setActiveTrack} />
              </View>
            )}
          </View>
          {Object.keys(activeTrack).length && (
            <View style={styles.rightContainer}>
              <MusicPreview tracks={tracks} activeTrack={activeTrack} />
            </View>
          )}
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyScreenSearch}>
            <Search onChangeText={(text) => setSearch(text)} />
          </View>
          {isLoading && <Text>Searching...</Text>}
          {isError && (
            <View>
              <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>No Results Found</Text>
            </View>
          )}
          <View style={styles.emptyTextView}>
            <Text style={styles.emptyText}>Search your favourite tracks, artists or albums... </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Home;
