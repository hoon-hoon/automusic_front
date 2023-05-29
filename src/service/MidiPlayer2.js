import React, { useEffect, useRef } from 'react';
import { Midi } from '@tonejs/midi';

const MidiPlayer2 = ({ midiData }) => {
  const player = useRef(null);

  useEffect(() => {
    // MIDI.js 플레이어 생성
    player.current = new Midi().load(midiData, true);

    return () => {
      // 컴포넌트 언마운트 시 MIDI.js 플레이어 정리
      player.current.stop();
    };
  }, [midiData]);

  const handlePlay = () => {
    if (player.current) {
      player.current.start();
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

export default MidiPlayer2;
