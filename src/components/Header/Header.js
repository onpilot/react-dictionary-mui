import {
  Box,
  Grid,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import languages from '../../data/lang-categories';
import './Header.css';

const Header = ({ search, setSearch, lang, setLang, setIsSearch }) => {
  const handleKeyDown = (e) => {
    if (search && e.keyCode === 13) {
      setIsSearch(true);
    }
  };

  return (
    <Box>
      <Typography variant='h1' className='title'>
        {search || 'dictionary.'}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Tooltip title='type a word and press enter' placement='top-end'>
            <TextField
              id='word-search'
              label='word search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ width: '100%' }}
            />
          </Tooltip>
        </Grid>
        <Grid item xs={4}>
          <Tooltip
            title='the new api currently only support english'
            placement='top-end'
          >
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
                <MenuItem
                  key={option.label}
                  value={option.label}
                  // !NOTE: disable languages other than english
                  // the new api currently only support english
                  // see: https://github.com/meetDeveloper/freeDictionaryAPI/issues/102
                  disabled={option.label !== 'en' ? true : false}
                >
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
