import { ToggleButtonGroup, ToggleButton } from "@mui/material";


export const SelectorDetail = ({ step }) => {

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={column}
        exclusive
        fullWidth
        required
        // onChange={moodChange}
        aria-label="Platform"
      >
        <ToggleButton value={1}>{column.label}</ToggleButton>
        <ToggleButton>{column.label}</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
