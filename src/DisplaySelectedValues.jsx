// src/DisplaySelectValues.jsx

import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

// eslint-disable-next-line react/prop-types
const DisplaySelectedValues = ({ values }) => {
  if (!values) return null;

  return (
    <Box mt={3}>
      <Typography variant="h6">Submitted Values</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Single Select"
            secondary={
              // eslint-disable-next-line react/prop-types
              values.singleSelect
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Multi Select"
            secondary={
              // eslint-disable-next-line react/prop-types
              values.multiSelect.join(", ")
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default DisplaySelectedValues;
