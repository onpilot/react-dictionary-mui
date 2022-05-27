import {
  Box,
  Grid,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import languages from '../../data/lang-categories';

const Header = ({ search, setSearch, lang, setLang, setIsSearch }) => {
  const handleKeyDown = (e) => {
    if (search && e.keyCode === 13) {
      setIsSearch(true);
    }
  };

  return (
    <Box>
      <Typography variant='h1' sx={{ padding: '3rem 0 1rem' }}>
        {search || 'dictionary.'}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Tooltip title='Type a word and press enter'>
            <TextField
              id='word-search'
              label='word search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ width: '100%' }}
            ></TextField>
          </Tooltip>
        </Grid>
        <Grid item xs={4}>
          <TextField
            select
            label='Select'
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
              setSearch('');
            }}
            helperText='Select a language'
          >
            {languages.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
