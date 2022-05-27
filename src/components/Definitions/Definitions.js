import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

const Definition = ({ data }) => {
  return (
    <Box>
      <List>
        {data ? (
          data.map((d) =>
            d.meanings.map((e) =>
              e.definitions.map((def, i) => (
                <ListItem disablePadding key={`definition-${i}`}>
                  <ListItemButton>
                    <ListItemText primary={def.definition} />
                  </ListItemButton>
                </ListItem>
              ))
            )
          )
        ) : (
          <div>Type some word and press enter.</div>
        )}
      </List>
    </Box>
  );
};

export default Definition;
