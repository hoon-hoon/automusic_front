import { Paper, Box, Container } from "@mui/material";
import React from "react";
import { CenteredOverlayForm } from "../components/CenteredOverlayForm";
import CustomStepper from "../components/CustomStepper";


function Create() {
    return(<>
    <CenteredOverlayForm>
        <Container style={{backgroundColor : "beige" ,alignItems: "center", justifyContent: "center", height: "70vh", padding: "150px", borderRadius: "0 0 50px 50px"}}>
        {/* <HorizontalLinearStepper /> */}
        <CustomStepper />
        </Container>
    </CenteredOverlayForm>
    </>)
}

export default Create;