import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";


export default function MoodSelector({ step, setMoodData }) {
  const [mood, setMood] = useState(null);
  const [mood2, setMood2] = useState('');


  // const [isCheck, setCheck] = useState(false);

  const detail = [
    {
      step: 1,
      content: '긍정적인 음악',
      content2: '부정적인 음악'
    },
    {
      step: 2,
      content: '경쾌한 음악',
      content2: '차분한 음악',
      content3: '우울한 음악',
      content4: '긴장되는 음악'
    },
    {
      step: 3,
      content: '악기'
    },
    {
      step: 4,
      content: 'bpm'
    },
    {
      step: 5,
      content: '4/4',
      content2: '8/8'
    },
  ]

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return '어떤 분위기의 음악을 원하시나요?';
      case 1:
        return '어떤 분위기의 음악을 원하시나요?';
      case 2:
        return "4개의 악기를 선택해주세요";
      case 3:
        return "bpm을 정해주세요";
      case 4:
        return "박자를 골라주세요";
    }
  };

  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    const joinData = {
      mood1: data.get("mood1"),
      mood2: data.get("mood2"),
    };
    console.log(joinData);
    console.log("hi");

  };
  const moodChange = (event, newMood) => {
    if (newMood !== null) {
      setMood(newMood);
    }
    console.log("자식컴포넌트 무드데이터", mood);
  };

  const handleClick = (e, mood) => {
    e.preventDefault();
    setMoodData(prevMoodData => [...prevMoodData, mood]);
  };

  // const detailMoodChange = (event, detailMood) => {
  //   setMood2(detailMood);
  //   console.log("Mood 2 :", mood2);
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: "40px", marginBottom: "20px" }}>
          <Typography>{getStepContent(step)}</Typography>
        </div>
        <ToggleButtonGroup
          className="step1"
          color="primary"
          value={mood}
          exclusive
          fullWidth
          required
          onChange={moodChange}
          onClick={(e) => handleClick(e, mood)}
          aria-label="Platform"
        >
          {step === 0 ? [
            <ToggleButton key={0} value={0}>{detail[step].content}</ToggleButton>,
            <ToggleButton key={1} value={1}>{detail[step].content2}</ToggleButton>
          ] : step === 1 && mood === 0 ? [
            <ToggleButton key={0} value={0}>{detail[step].content}</ToggleButton>,
            <ToggleButton key={1} value={1}>{detail[step].content2}</ToggleButton>
          ] : step === 1 && mood === 1 ? [
            <ToggleButton key={0} value={0}>{detail[step].content3}</ToggleButton>,
            <ToggleButton key={1} value={1}>{detail[step].content4}</ToggleButton>
          ] : null}
        </ToggleButtonGroup>


        {/* {isCheck &&
          <div style={{marginTop:"30px"}}>
            <ToggleButtonGroup
              className="step2"
              color="primary"
              value={mood2}
              exclusive
              fullWidth
              required
              onChange={detailMoodChange}
              aria-label="Platform"
            >
              <ToggleButton value={0}>{detail2[step].content}</ToggleButton>
              <ToggleButton value={1}>{detail2[step].content2}</ToggleButton>
            </ToggleButtonGroup>
          </div>
        } */}

        {/* <SelectorDetail /> */}
      </form>
    </>
  );
}
