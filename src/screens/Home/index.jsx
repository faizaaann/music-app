import { useState, useEffect, useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import List from '../../components/List';
import MusicPreview from '../../components/MusicPreview';
import Search from '../../components/Search';
import Startup from '../../components/Startup';
import API from '../../api';
import styles from './styles';
import { ErrorType } from '../../utils/ErrorType';
import { useToast } from 'native-base';
import colors from '../../constants/colors';

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState('');
  const [activeTrack, setActiveTrack] = useState({});
  const [previousTrack, setPreviousTrack] = useState({});
  const [playingSong, setPlayingSong] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toast = useToast();

  const getSearchedData = useCallback(
    async (value) => {
      try {
        const { data } = await API.get(`search?media=music&entity=song&term=${value}`);
        if (data?.results?.length) setTracks(data.results);
        else setIsError(true);
      } catch (error) {
        toast.show({
          description: ErrorType(error),
        });
      } finally {
        setIsLoading(false);
      }
    },
    [search],
  );

  useEffect(() => {
    if (!search) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
      const debounceSearch = setTimeout(() => {
        getSearchedData(search);
      }, 3000);

      return () => clearTimeout(debounceSearch);
    }
    setIsError(false);
  }, [search]);

  useEffect(() => {
    setIsPlaying(false);
  }, [activeTrack]);

  return (
    <View>
      {tracks.length ? (
        <View style={styles.container}>
          <View style={Object.keys(activeTrack).length ? styles.leftContiner : styles.leftContinerFull}>
            <View style={Object.keys(activeTrack).length ? styles.search : styles.searchFull}>
              <Search onChangeText={(text) => setSearch(text)} />
            </View>
            {isLoading && <ActivityIndicator size="large" color={colors.BLACK} style={{ marginVertical: 25 }} />}
            {tracks.length && (
              <View style={styles.list}>
                <List tracks={tracks} setActiveTrack={setActiveTrack} isPlaying={isPlaying} playingSong={playingSong} previousTrack={previousTrack} />
              </View>
            )}
          </View>
          {Object.keys(activeTrack).length && (
            <View style={styles.rightContainer}>
              <MusicPreview
                tracks={tracks}
                activeTrack={activeTrack}
                playingSong={playingSong}
                setPlayingSong={setPlayingSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                previousTrack={previousTrack}
                setPreviousTrack={setPreviousTrack}
              />
            </View>
          )}
        </View>
      ) : (
        <Startup Search={Search} setSearch={setSearch} isError={isError} isLoading={isLoading} />
      )}
    </View>
  );
};

export default Home;
