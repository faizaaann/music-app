import React, { useState, useEffect } from 'react';
import { View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import images from '../../constants/images';
import List from '../List';
import styles from './styles';

import defaultImage from '../../assets/images/track-default.png';

/**
 * Component for the Selected Track Preview
 *
 * @component
 * @example
 *
 * return <MusicPreview
                tracks={tracks}
                activeTrack={activeTrack}
                playingSong={playingSong}
                setPlayingSong={setPlayingSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                previousTrack={previousTrack}
                setPreviousTrack={setPreviousTrack}
              />
 *
 * @returns {ReactElement}
 * @author Faizan Ahmad <a-f.a@outlook.com>
 * @version 1.0.0
 */

const MusicPreview = ({ tracks, activeTrack, playingSong, setPlayingSong, isPlaying, setIsPlaying, previousTrack, setPreviousTrack }) => {
  const songs = tracks?.filter((track) => track?.collectionName === activeTrack?.collectionName);
  const { previewUrl } = activeTrack;

  const resumeSound = async () => {
    setIsPlaying(true);
    await playingSong.playAsync();
  };

  const pauseSound = async () => {
    setIsPlaying(false);
    await playingSong.pauseAsync();
  };

  const playSound = async () => {
    await playingSong?.unloadAsync();
    try {
      const audio = new Audio.Sound();
      await audio.loadAsync({
        uri: previewUrl,
      });
      await audio.playAsync();
      setPlayingSong(audio);
      setIsPlaying(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = () => {
    if (!playingSong) {
      setPreviousTrack(activeTrack);
      playSound();
    } else if (!isPlaying && playingSong && activeTrack.previewUrl === previousTrack.previewUrl) {
      resumeSound();
    } else if (playingSong && activeTrack.previewUrl !== previousTrack.previewUrl) {
      setPreviousTrack(activeTrack);
      playSound();
    } else if (isPlaying && playingSong) {
      pauseSound();
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.MPContainer}>
        <TouchableOpacity onPress={() => console.log('item')}>
          <View style={styles.activeTrackContainer}>
            <Image source={activeTrack ? activeTrack.artworkUrl100 : defaultImage} style={styles.trackImage} />
          </View>
        </TouchableOpacity>
        <View style={styles.playButtonContainer}>
          <TouchableOpacity onPress={handlePress}>
            {playingSong && isPlaying ? <Image source={images.PAUSE} style={styles.playIcon} /> : <Image source={images.PLAY} style={styles.playIcon} />}
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
