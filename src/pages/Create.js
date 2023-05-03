import { Paper, Box, Container } from "@mui/material";
import "./Create.css";
import React from "react";
import { CenteredOverlayForm } from "../components/CenteredOverlayForm";
import CustomStepper from "../components/CustomStepper";


function Create() {
    return(<>
    <CenteredOverlayForm className="Form">
        <Container className="Container">
        <CustomStepper />
        </Container>
    </CenteredOverlayForm>
    </>)
}

export default Create;