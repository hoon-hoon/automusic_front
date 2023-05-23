import React, { useEffect, useRef } from 'react';
import MidiParser from 'midi-parser-js';
import * as Tone from 'tone';

const MidiPlayer = ({ midiData }) => {
  const player = useRef(null);

  useEffect(() => {
    // MIDI 파일 파싱
    const midiFile = MidiParser.parse(midiData);

    // Tone.js 플레이어 생성
    const synth = new Tone.Synth().toDestination();
    player.current = new Tone.Player(midiFile, () => {
      // 재생이 끝났을 때 호출되는 콜백 함수
      console.log('MIDI 재생이 완료되었습니다.');
    }).connect(synth);

    return () => {
      // 컴포넌트 언마운트 시 Tone.js 플레이어 정리
      player.current.dispose();
      synth.dispose();
    };
  }, [midiData]);

  const handlePlay = () => {
    if (player.current) {
      Tone.start(); // 오디오 컨텍스트 시작
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

export default MidiPlayer;