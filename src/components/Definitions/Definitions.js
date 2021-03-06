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
import './Definitions.css';

const Definitions = ({ isLoading, data, darkmode }) => {
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
          <List className={darkmode ? 'dark r4' : 'light r4'}>
            {data[0].phonetics ? (
              data[0].phonetics.map((e, i) => (
                <ListItem disablePadding key={`phonetic-${i}`}>
                  <ListItemButton className='phonetics-container'>
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
                <ListItemButton
                  key={i}
                  className={darkmode ? 'dark r4 mt20' : 'light r4 mt20'}
                >
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
