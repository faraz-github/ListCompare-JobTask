import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

function ListInput({ setFirstList, setSecondList }) {

    const [selectedList, setSelectedList] = useState("");
    const [item, setItem] = useState("");


    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (item !== "") {

            if (selectedList === "one") {
                setFirstList((prevState) => [...prevState, item]);
            } else if (selectedList === "two") {
                setSecondList((prevState) => [...prevState, item]);
            } else {
                console.log("Please select a list");
            }

            setItem("");

        } else {
            console.log("Please input a value");
        }

    }

    return (
        <form onSubmit={onSubmitHandler}>
            <FormLabel>
                <Typography color={"primary"} variant="subtitle2">
                    List Input
                </Typography>
            </FormLabel>
            <RadioGroup row>
                <FormControlLabel value="one" control={<Radio />} label="List A" onChange={(e) => setSelectedList(e.target.value)} />
                <FormControlLabel value="two" control={<Radio />} label="List B" onChange={(e) => setSelectedList(e.target.value)} />
            </RadioGroup>
            <Stack spacing={1}>
                <TextField fullWidth type="text" label="Type here..." variant="outlined" onChange={(e) => setItem(e.target.value)} value={item} />
                <Button fullWidth type="submit" disableElevation variant="contained">Add To List</Button>
            </Stack>
        </form>

    )
}

export default ListInput;