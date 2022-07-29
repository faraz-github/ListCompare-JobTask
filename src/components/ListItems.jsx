import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ListItems({ listTitle, listItems }) {
  return (
    <Accordion sx={{ fontFamily: "Quicksand" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant="button">
          {listTitle}
        </Typography>

      </AccordionSummary>
      <AccordionDetails>
        <List dense>
          {
            listItems.map((item, index) => {
              return <ListItem key={index}>
                {item}
              </ListItem>
            })
          }
        </List>
      </AccordionDetails>
    </Accordion>
  )
}

export default ListItems;