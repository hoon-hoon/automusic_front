import { Box } from "@mui/material"
import styled from "styled-components"

export const CustomDivider = ({children}) => {
    <StyledCustomDivider>{children}</StyledCustomDivider>
}

const StyledCustomDivider = styled(Box)`
    border: 1px solid black;
    background-color: black;
    width: 10vw;
    height: 10vw;
`