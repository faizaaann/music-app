import { View, FlatList, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import Divider from '../Divider';
import styles from './styles';

const List = ({ tracks, activeTrack, setActiveTrack, isMusicPlayer }) => {
  const ListItem = ({ item }) => (
    <>
      <TouchableOpacity onPress={() => setActiveTrack(item)}>
        <View style={styles.listItem}>
          <View styles={styles.imageContainer}>
            <Image source={item.artworkUrl100} style={styles.trackImage} />
          </View>
          <View styles={styles.trackInfo}>
            <Text style={styles.trackName}>{item.trackName.length > 18 ? item.trackName.substring(0, 18 - 3) + '...' : item.trackName}</Text>
            <Text style={styles.artistName}>{item.artistName}</Text>
            <Text style={styles.albumName}>{item.collectionName.length > 20 ? item.collectionName.substring(0, 20 - 3) + '...' : item.collectionName}</Text>
          </View>
          {item?.trackId === activeTrack?.trackId && <Text style={styles.playingStatus}>playing...</Text>}
        </View>
      </TouchableOpacity>
      <Divider />
    </>
  );

  const SongItem = ({ item }) => (
    <>
      <View style={styles.songInfo}>
        <Text style={styles.songInfoText}>{item.trackName}</Text>
      </View>
      <Divider />
    </>
  );

  return (
    <SafeAreaView>
      <FlatList data={tracks} renderItem={isMusicPlayer ? SongItem : ListItem} keyExtractor={(item) => item.trackId} />
    </SafeAreaView>
  );
};

export default List;
