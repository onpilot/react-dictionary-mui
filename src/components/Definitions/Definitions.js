import {
  Box,
  Chip,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

const Definitions = ({ isLoading, data }) => {
  if (!data) {
    return (
      <Box>
        Try to type a word and press <Chip label='enter' />
      </Box>
    );
  }
  return (
    <Box sx={{ margin: '2rem 0' }}>
      {isLoading ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <Typography variant='body1'>Phonetics</Typography>
          <List>
            {data[0].phonetics ? (
              data[0].phonetics.map((e, i) => (
                <ListItem disablePadding key={`phonetic-${i}`}>
                  <ListItemButton>
                    {e.text ? (
                      <ListItemText primary={e.text} />
                    ) : (
                      <ListItemText>
                        <s>no data available</s>
                      </ListItemText>
                    )}
                    {e.audio && <audio src={e.audio} controls></audio>}
                  </ListItemButton>
                </ListItem>
              ))
            ) : (
              <Typography variant='body2'>data unavailable</Typography>
            )}
          </List>
          <Divider sx={{ margin: '1rem 0' }} />
          <Typography variant='body1'>Definitions</Typography>
          <List>
            {data.map((d) =>
              d.meanings.map((e, i) => (
                <ListItemButton key={i}>
                  {
                    <Box>
                      <Typography variant='body2'>{e.partOfSpeech}</Typography>
                      {e.definitions.map((def, i) => (
                        <ListItem disablePadding key={`definition-${i}`}>
                          <ListItemButton>
                            <ListItemText primary={def.definition} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </Box>
                  }
                </ListItemButton>
              ))
            )}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default Definitions;
