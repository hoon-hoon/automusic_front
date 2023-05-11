import { Container } from "@mui/material";
import "./Create.css";
import React, { useState } from "react";
import { CenteredOverlayForm } from "../components/CenteredOverlayForm";
import CustomStepper from "../components/CustomStepper";
import styled from "styled-components";



function Create() {
    return (
        <>
            <div className="Form">
                <Container className="Container">
                    <CustomStepper />
                </Container>
            </div>
        </>
    );
}

export default Create;
