import * as React from "react";
import "./css/Generate.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { FormControl, FormControlLabel, Radio, RadioGroup, Slider, Typography } from "@mui/material";
import { Instrument } from "./Instrument";
import SongService from "../service/SongService";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Loading from "./Loading";

const steps = [
    "음악 분위기 선택",
    "음악 상세 분위기 선택",
    "악기 선택",
    "bpm 설정",
    "박자 설정",
];

const getStepContent = (step) => {
    switch (step) {
        case 0:
            return '어떤 분위기의 음악을 원하시나요?';
        case 1:
            return '음악의 상세 분위기를 골라주세요.';
        case 2:
            return "4개의 악기를 선택해주세요.";
        case 3:
            return "bpm을 정해주세요.";
        case 4:
            return "음의 높낮이를 결정해주세요.";
        default:
            return
    }
};

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
        content: '낮음',
        content2: '높음',
    },
];

export default function Generate(pros) {
    const [isLoading, setIsLoading] = useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [musicData, setMusicData] = React.useState([""]);
    const [bpm, setBpm] = React.useState(50);
    const [inst, setInst] = React.useState('0');
    const [selectedValues, setSelectedValues] = React.useState([]);
    const history = useHistory();

    useEffect(() => {
        SongService.getMySong()
            .catch((err)=>{
                history.push("/signin");
                console.log(err);
            })
    }, [history]);

    function handleCreateSong() {
        setIsLoading(true);
        SongService.createSong(musicData)
            .then((response) => {
                pros.playSongButton(response.data)
                setIsLoading(false);
                alert("complete!!");
            })
            .catch((error) => {
                alert("fail retry please...");
            });
    }


    let lastData = musicData;

    const onBpmChanged = (event, newValue) => {
        setBpm(newValue);
    };

    const isStepOptional = (step) => {
        return step === 0, 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        let value
        if (activeStep === 3) {
            value = bpm;
        } else if (activeStep === 2) {
            value = inst;
        } else {
            value = document.querySelector('input[name="radio-buttons-group"]:checked').value;
        }

        setMusicData(prev => {
            const newData = [...prev];
            newData[activeStep] = value;
            if (activeStep === 0) {
                newData[activeStep] = value;
            }
            return newData;
        });

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);

        // radio값 배열에 넣음
        const newSelectedValues = [...selectedValues];
        newSelectedValues[activeStep] = musicData;
        setSelectedValues(newSelectedValues);
        console.log("들어간 무드데이터:", musicData);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    
        const newSelectedValues = [...selectedValues];
        newSelectedValues[activeStep] = ["skip"];
    };
      

    const handleReset = () => {
        console.log(musicData);
        console.log(JSON.stringify(musicData));

        setMusicData([]);
        setActiveStep(0);
    };

    const handleRadioChange = (event) => {
        const newSelectedValues = [...selectedValues];
        newSelectedValues[activeStep] = event.target.value;
        setSelectedValues(newSelectedValues);
    };

    const instChange = (e) => {
        setInst(e);
        console.log(e);
    }

    return (
        <div className="flex flex-col wrapper">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 border border-gray">
                    <div className="shadow overflow-hidden border-gray-200 sm:rounded-lg text-align-last-center">
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    if (isStepOptional(index)) {
                                        labelProps.optional = (
                                            <Typography variant="caption"></Typography>
                                        );
                                    }
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    {isLoading ? (
                                        <Loading />
                                    ):(
                                        <label style={{ marginTop: "50px", placeContent: "center" }}>
                                            모든 과정이 끝났습니다! <br /> Create를 누르면 노래가 생성됩니다.
                                        </label>
                                    )}

                                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                        <Box sx={{ flex: "1 1 auto" }} />
                                        <button onClick={handleReset}>Reset</button>
                                        <button onClick={handleCreateSong}>Create</button>

                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>

                                    <hr style={{ borderTop: "5px solid gray", borderRadius: "10px" }}></hr>

                                    {/* Content 란 */}

                                    <FormControl className="FormControl">
                                    <label className="content">{getStepContent(activeStep)}</label>


                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="mood"
                                            name="radio-buttons-group"
                                            onChange={(event) => handleRadioChange(event)}
                                        >

                                            {activeStep === 0 ? [
                                                <>
                                                    <FormControlLabel value="0" control={<Radio />} label={detail[activeStep].content} />
                                                    <FormControlLabel value="1" control={<Radio />} label={detail[activeStep].content2} />
                                                </>
                                            ] : activeStep === 1 && lastData[0] === '0' ? [
                                                <>
                                                    <FormControlLabel value="0" control={<Radio />} label={detail[activeStep].content} />
                                                    <FormControlLabel value="1" control={<Radio />} label={detail[activeStep].content2} />
                                                </>
                                            ] : activeStep === 1 && lastData[0] === '1' ? [
                                                <>
                                                    <FormControlLabel value="0" control={<Radio />} label={detail[activeStep].content3} />
                                                    <FormControlLabel value="1" control={<Radio />} label={detail[activeStep].content4} />
                                                </>
                                            ] : activeStep === 2 ? [
                                                <>
                                                    <Instrument onChange={instChange} />
                                                    {/* <InstrumentForm2 /> */}
                                                </>
                                            ] : activeStep === 3 ? [
                                                <>
                                                    <Box sx={{ width: 300 }}>
                                                        <Slider
                                                            aria-label="bpm"
                                                            defaultValue={50}
                                                            onChange={onBpmChanged}
                                                            valueLabelDisplay="auto"
                                                            step={10}
                                                            marks
                                                            min={50}
                                                            max={100}
                                                        />
                                                    </Box>
                                                </>
                                            ] : activeStep === 4 ? [
                                                <>
                                                    <FormControlLabel value="0" control={<Radio />} label={detail[activeStep].content} />
                                                    <FormControlLabel value="1" control={<Radio />} label={detail[activeStep].content2} />
                                                </>
                                            ] : null
                                            }

                                        </RadioGroup>
                                    </FormControl>

                                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                        <button
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                        >
                                            Back
                                        </button>
                                        <Box sx={{ flex: "1 1 auto" }} />
                                        {isStepOptional(activeStep) && (
                                            <button color="inherit" onClick={handleSkip}>
                                                Skip
                                            </button>
                                        )}
                                        <button onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                        </button>
                                    </Box>
                                </React.Fragment>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}
