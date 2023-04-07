import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, FormControlLabel, Radio, RadioGroup, Slider } from "@mui/material";

const steps = [
    "음악 분위기 설정 1",
    "음악 분위기 설정 2",
    "악기 선택",
    "bpm 설정하기",
    "박자 설정하기",
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
            return "박자를 골라주세요.";
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
        content: '4/4',
        content2: '8/8'
    },
];

export default function CustonStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [musicData, setMusicData] = React.useState([""]);
    const [bpm, setBpm] = React.useState(50);

    // console.log(musicData);

    const [selectedValues, setSelectedValues] = React.useState([]);


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
    };

    const handleReset = () => {
        console.log(musicData);
        setMusicData([]);
        setActiveStep(0);
    };

    const handleRadioChange = (event) => {
        const newSelectedValues = [...selectedValues];
        newSelectedValues[activeStep] = event.target.value;
        setSelectedValues(newSelectedValues);
    };


    return (
        <Box sx={{ width: "100%" }}>
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
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        모든 과정이 끝났습니다! <br /> Finish를 누르면 노래가 생성됩니다.
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>

                    </Typography>
                    {/* Content 란 */}
                    <Typography style={{ margin: "30px" }}>{getStepContent(activeStep)}</Typography>

                    <FormControl>

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
                            ] : activeStep === 1 ? [
                                <>
                                    <FormControlLabel value="0" control={<Radio />} label={detail[activeStep].content} />
                                    <FormControlLabel value="1" control={<Radio />} label={detail[activeStep].content2} />
                                </>
                            ] : activeStep === 2 ? [
                                <>
                                    <FormControlLabel value="0" control={<Radio />} label={detail[activeStep].content} />
                                    <FormControlLabel value="1" control={<Radio />} label={detail[activeStep].content2} />
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
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
