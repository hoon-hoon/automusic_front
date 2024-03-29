import { FormControl, MenuItem, Select, Box } from "@mui/material";
import "./css/Instrument.css";
import React, { useState } from "react";
import instrument from "../asset/instrument.json";

export const Instrument = ({ onChange }) => {
  const [formValues, setFormValues] = useState({
    inst1: "",
    inst2: "",
    inst3: "",
    inst4: "",
    inst5: ""
  });

  onChange(formValues);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const instData = instrument.map((item, index) => {
    return (
      <MenuItem key={index} value={item.value}>
        {item.item}
      </MenuItem>
    );
  });

  return (
    <Box>
      <FormControl className="InstForm">
        <Select
          name="inst1"
          labelId="demo-simple-select-label-1"
          id="demo-simple-select-1"
          value={formValues.inst1}
          label="Instrument 1"
          onChange={handleFormChange}
          style={{ width: "100%" }}
        >
          {instData}
        </Select>
      </FormControl>
      <FormControl className="InstForm">
        <Select
          name="inst2"
          labelId="demo-simple-select-label-2"
          id="demo-simple-select-2"
          value={formValues.inst2}
          label="Instrument 2"
          onChange={handleFormChange}
          style={{ width: "100%" }}
        >
          {instData}
        </Select>
      </FormControl>
      <FormControl className="InstForm">
        <Select
          name="inst3"
          labelId="demo-simple-select-label-3"
          id="demo-simple-select-3"
          value={formValues.inst3}
          label="Instrument 3"
          onChange={handleFormChange}
          style={{ width: "100%" }}
        >
          {instData}
        </Select>
      </FormControl>
      <FormControl className="InstForm">
        <Select
          name="inst4"
          labelId="demo-simple-select-label-4"
          id="demo-simple-select-4"
          value={formValues.inst4}
          label="Instrument 4"
          onChange={handleFormChange}
          style={{ width: "100%" }}
        >
          {instData}
        </Select>
      </FormControl>
      <FormControl className="InstForm">
        <Select
          name="inst5"
          labelId="demo-simple-select-label-4"
          id="demo-simple-select-4"
          value={formValues.inst5}
          label="Instrument 5"
          onChange={handleFormChange}
          style={{ width: "100%" }}
        >
          {instData}
        </Select>
      </FormControl>
    </Box>
  );
};
