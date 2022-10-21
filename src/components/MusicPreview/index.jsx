import React, { useState, useEffect } from 'react';
import { View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import images from '../../constants/images';
import List from '../List';
import styles from './styles';

import defaultImage from '../../assets/images/track-default.png';

const MusicPreview = ({ tracks, activeTrack }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const songs = tracks?.filter((track) => track?.collectionName === activeTrack?.collectionName);
  const { previewUrl } = activeTrack;

  const resumeSound = async () => {
    console.log('resume');
    setIsPlaying(true);
    await sound.playAsync();
  };

  const pauseSound = async () => {
    console.log('pause');
    setIsPlaying(false);
    await sound.pauseAsync();
  };

  const playSound = async () => {
    console.log('play');
    // stop();
    try {
      const sound = new Audio.Sound();

      console.log('new load');
      await sound.loadAsync({
        uri: previewUrl,
      });

      setSound(sound);
      await sound.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('track change');
    // setIsPlaying(false);
    setSound(null);
  }, [activeTrack]);

  useEffect(() => {
    return sound
      ? () => {
          // sound.unloadAsync();
          // setSound(null);
        }
      : undefined;
  }, [sound]);

  return (
    <SafeAreaView>
      <View style={styles.MPContainer}>
        <TouchableOpacity onPress={() => console.log('item')}>
          <View style={styles.activeTrackContainer}>
            <Image source={activeTrack ? activeTrack.artworkUrl100 : defaultImage} style={styles.trackImage} />
          </View>
        </TouchableOpacity>
        <View style={styles.playButtonContainer}>
          <TouchableOpacity onPress={isPlaying ? pauseSound : sound ? resumeSound : playSound}>
            {sound && isPlaying ? <Image source={images.PAUSE} style={styles.playIcon} /> : <Image source={images.PLAY} style={styles.playIcon} />}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.songsContainer}>
        <List tracks={songs} isMusicPlayer />
      </View>
    </SafeAreaView>
  );
};

export default MusicPreview;
