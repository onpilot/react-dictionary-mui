import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import languages from '../../data/lang-categories';

const Header = ({ search, setSearch, lang, setLang, setIsSearch }) => {
  const handleKeyDown = (e) => {
    if (search && e.keyCode === 13) {
      setIsSearch(true);
    }
  };

  return (
    <div>
      <Typography variant='h1' style={{ textTransform: 'uppercase' }}>
        {search || 'dictionary'}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            id='standard'
            label='standard'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ width: '100%' }}
          ></TextField>
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
