import React, { useEffect, useRef } from 'react';
import MidiParser from 'midi-parser-js';
import * as Tone from 'tone';

const MidiPlayer = ({ midiData }) => {
  const player = useRef(null);

  useEffect(() => {
    const synth = new Tone.Synth().toDestination();
    player.current = new Tone.Player().connect(synth);

    return () => {
      player.current.dispose();
      synth.dispose();
    };
  }, []);

  const handlePlay = () => {
    if (player.current) {
      Tone.start(); // 오디오 컨텍스트 시작

      // MIDI 데이터 로드 후 재생
      player.current.load(midiData).then(() => {
        player.current.start();
      });
    }
  };

  const handleStop = () => {
    if (player.current) {
      player.current.stop();
    }
  };

  return (
    <div>
      <button onClick={handlePlay}>재생</button>
      <button onClick={handleStop}>정지</button>
    </div>
  );
};

export default MidiPlayer;
