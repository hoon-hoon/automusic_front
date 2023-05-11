import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function MusicPlayer(props) {
  return (
    <AudioPlayer
      autoPlayAfterSrcChange={false}
      src={props.src}
      showJumpControls={false}
    />
  );
}

export default MusicPlayer;