import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Alert,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';
import Footer from './components/Footer/Footer';
import SocialLinks from './components/Footer/SocialLinks';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

const fetchDictionary = async (
  search,
  lang,
  setData,
  setIsLoading,
  setIsSearch,
  setIsError
) => {
  const url = 'https://api.dictionaryapi.dev/api/v2/entries';
  try {
    await setIsLoading(true);
    await setIsError(false);
    const data = await axios.get(`${url}/${lang}/${search}`);
    await setData(data.data);
    await setIsLoading(false);
    await setIsSearch(false);
  } catch (err) {
    await setIsError(true);
    await setIsLoading(false);
    await setIsSearch(false);
    console.error(err);
  }
};

function App() {
  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [lang, setLang] = useState('en');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [darkmode, setDarkmode] = useState(true);

  useEffect(() => {
    isSearch &&
      fetchDictionary(
        search,
        lang,
        setData,
        setIsLoading,
        setIsSearch,
        setIsError
      );
  }, [isSearch, search, lang]);

  const darkTheme = createTheme({
    palette: {
      mode: darkmode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth='md' sx={{ margin: '0 auto 100px' }}>
        <ThemeSwitcher darkmode={darkmode} setDarkmode={setDarkmode} />
        <Header
          search={search}
          setSearch={setSearch}
          lang={lang}
          setLang={setLang}
          setIsSearch={setIsSearch}
          displayTooltip={data ? true : false}
        ></Header>
        {isError ? (
          <Alert severity='error'>
            ERROR: No entry found! Try another word.
          </Alert>
        ) : (
          <Definitions
            isLoading={isLoading}
            data={data}
            darkmode={darkmode}
          ></Definitions>
        )}
      </Container>
      <SocialLinks />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
