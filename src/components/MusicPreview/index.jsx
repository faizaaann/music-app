import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import images from '../../constants/images';
import List from '../List';
import styles from './styles';

import defaultImage from '../../assets/images/track-default.png';

const MusicPreview = ({ tracks, activeTrack }) => {
  const songs = tracks?.filter((track) => track?.collectionName === activeTrack?.collectionName);
  return (
    <SafeAreaView>
      <View style={styles.MPContainer}>
        <TouchableOpacity onPress={() => console.log('item')}>
          <View style={styles.activeTrackContainer}>
            <Image source={activeTrack ? activeTrack.artworkUrl100 : defaultImage} style={styles.trackImage} />
          </View>
        </TouchableOpacity>
        <View style={styles.playButtonContainer}>
          <Image source={images.PLAY} style={styles.playIcon} />
        </View>
      </View>
      <View style={styles.songsContainer}>
        <List tracks={songs} isMusicPlayer />
      </View>
    </SafeAreaView>
  );
};

export default MusicPreview;
