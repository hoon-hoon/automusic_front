import { Paper, Box, Container } from "@mui/material";
import React from "react";
import { CenteredOverlayForm } from "../components/CenteredOverlayForm";
import HorizontalLinearStepper from "../components/CreateStepper";

function Create() {
    return(<>
    <CenteredOverlayForm>
        <Container style={{backgroundColor : "beige" ,alignItems: "center", justifyContent: "center", height: "60vh", padding: "150px", borderRadius: "50px"}}>
        <HorizontalLinearStepper />
        </Container>
    </CenteredOverlayForm>
    </>)
}

export default Create;