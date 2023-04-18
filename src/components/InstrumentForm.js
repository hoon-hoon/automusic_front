import { Accordion, Container, FormControl, MenuItem, Select } from "@mui/material";
import "./InstrumentForm.css";
import React, { useState } from "react";
import instrument from "../asset/instrument.json"

export const InstrumentForm = ({ onChange }) => {
    // console.log(instrument[5].item);

    const [inst1, setInst1] = useState('');
    const [inst2, setInst2] = useState('');
    const [inst3, setInst3] = useState('');
    const [inst4, setInst4] = useState('');


    const handleChange = (e) => {
        setInst1(e.target.value);
        onChange(e.target.value);
        console.log(inst1);
    }

    const instData = instrument.map((item, index) => {
        return (
            <MenuItem key={index} value={item.id}>
                {item.item}
            </MenuItem>
        )
    })
    return (
        <FormControl className="FormControl">
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inst1}
                label="Instrument"
                onChange={handleChange}
            >
                {instData}
            </Select>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inst2}
                label="Instrument"
                onChange={handleChange}
            >
                {instData}
            </Select>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inst3}
                label="Instrument"
                onChange={handleChange}
            >
                {instData}
            </Select>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inst4}
                label="Instrument"
                onChange={handleChange}
            >
                {instData}
            </Select>
        </FormControl>
    )
}