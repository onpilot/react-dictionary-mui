import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import languages from '../../data/lang-categories';

const Header = ({ lang, setLang, word, setWord }) => {
  return (
    <div>
      <Typography variant='h1' style={{ textTransform: 'uppercase' }}>
        {word || 'word dict'}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            id='standard'
            label='standard'
            value={word}
            onChange={(e) => setWord(e.target.value)}
            style={{ width: '100%' }}
          ></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id='filled-select-currency'
            select
            label='Select'
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
              setWord('');
            }}
            helperText='Select your language'
          >
            {languages.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
