import { Accordion, AccordionDetails, AccordionSummary, List, ListItem } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ListItems({ listTitle, listItems }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        {listTitle}
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