import { useEffect, useState } from "react";

import { Accordion, AccordionSummary, List, ListItem, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function ListComputation({ firstList, secondList }) {

    const [listResults, setListResults] = useState({
        onlyInFirst: [],
        onlyInSecond: [],
        presentInFirstAndSecond: [],
        uniqueInFirstAndSecond: []
    })

    useEffect(() => {

        const onlyInFirst = () => {
            const onlyInFirst = firstList.filter((item) => !secondList.includes(item));
            // console.log(onlyInFirst); // Debug Log
            setListResults((prevState) => ({ ...prevState, onlyInFirst: onlyInFirst }));
        }
        onlyInFirst();

        const onlyInSecond = () => {
            const onlyInSecond = secondList.filter((item) => !firstList.includes(item));
            // console.log(onlyInSecond); // Debug Log
            setListResults((prevState) => ({ ...prevState, onlyInSecond: onlyInSecond }));
        }
        onlyInSecond();

        const presentInFirstAndSecond = () => {
            const fullList = firstList.concat(secondList);
            const presentInFirstAndSecond = fullList.filter((item) => firstList.includes(item) && secondList.includes(item));
            const uniqueValues = presentInFirstAndSecond.filter((item, index, array) => array.indexOf(item) === index);
            // console.log(uniqueValues); // Debug Log
            setListResults((prevState) => ({ ...prevState, presentInFirstAndSecond: uniqueValues }));
        }
        presentInFirstAndSecond();

        const uniqueInFirstAndSecond = () => {
            const fullList = firstList.concat(secondList);
            const uniqueValues = fullList.filter((item, index, array) => array.indexOf(item) === index);
            // console.log(uniqueValues); // Debug Log
            setListResults((prevState) => ({ ...prevState, uniqueInFirstAndSecond: uniqueValues }));
        }
        uniqueInFirstAndSecond();

    }, [firstList, secondList]);


    return (
        <>
            <Accordion sx={{ fontFamily: "Quicksand" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="button">
                        Items Present Only In A
                    </Typography>

                </AccordionSummary>
                <AccordionSummary>
                    {
                        listResults.onlyInFirst.length
                            ? <List dense>
                                {
                                    listResults.onlyInFirst.map((item, index) => {
                                        return <ListItem key={index}>
                                            {item}
                                        </ListItem>
                                    })
                                }
                            </List>
                            : null
                    }
                </AccordionSummary>
            </Accordion>
            <Accordion sx={{ fontFamily: "Quicksand" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="button">
                        Items Present Only In B
                    </Typography>

                </AccordionSummary>
                <AccordionSummary>
                    {
                        listResults.onlyInSecond.length
                            ? <List dense>
                                {
                                    listResults.onlyInSecond.map((item, index) => {
                                        return <ListItem key={index}>
                                            {item}
                                        </ListItem>
                                    })
                                }
                            </List>
                            : null
                    }
                </AccordionSummary>
            </Accordion>
            <Accordion sx={{ fontFamily: "Quicksand" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="button">
                        Items Present In Both A And B
                    </Typography>

                </AccordionSummary>
                <AccordionSummary>
                    {
                        listResults.presentInFirstAndSecond.length
                            ? <List dense>
                                {
                                    listResults.presentInFirstAndSecond.map((item, index) => {
                                        return <ListItem key={index}>
                                            {item}
                                        </ListItem>
                                    })
                                }
                            </List>
                            : null
                    }
                </AccordionSummary>
            </Accordion>
            <Accordion sx={{ fontFamily: "Quicksand" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="button">
                        Items Combining Both A And B Unique
                    </Typography>

                </AccordionSummary>
                <AccordionSummary>
                    {
                        listResults.uniqueInFirstAndSecond.length
                            ? <List dense>
                                {
                                    listResults.uniqueInFirstAndSecond.map((item, index) => {
                                        return <ListItem key={index}>
                                            {item}
                                        </ListItem>
                                    })
                                }
                            </List>
                            : null
                    }
                </AccordionSummary>
            </Accordion>

        </>
    )
}

export default ListComputation;