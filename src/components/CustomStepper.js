import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

const steps = [
    "음악 분위기 설정 1",
    "음악 분위기 설정 2",
    "악기 선택",
    "bpm 설정하기",
    "박자 설정하기",
];

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

    const [selectedValues, setSelectedValues] = React.useState([]);

    console.log(activeStep);

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
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);

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
        setActiveStep(0);
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
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="0" control={<Radio />} label="긍정적인" />
                            <FormControlLabel value="1" control={<Radio />} label="부정적인" />

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
