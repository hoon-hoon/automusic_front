import styled from "styled-components";
import { Container } from "@mui/material";
import { CustomDivider } from "./CustomDivider";

export const CenteredOverlayForm = ({ children, backgroundColor }) => {
  return (
    <>
      <StyledCentralizedContainer
        maxWidth={false}
        backgroundColor={backgroundColor}
      >
        <CustomDivider>
        {children}
        </CustomDivider>
      </StyledCentralizedContainer>
    </>
  );
};

const StyledCentralizedContainer = styled(Container)`
  background-color: ${(props) => props.backgroundColor || "#d29f8a"};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
