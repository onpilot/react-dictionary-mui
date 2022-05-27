import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

const fetchDictionary = async (search, lang, setData) => {
  const url = 'https://api.dictionaryapi.dev/api/v2/entries';
  const data = await axios.get(`${url}/${lang}/${search}`);
  console.log(data.data);
  setData(data.data);
};

function App() {
  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [lang, setLang] = useState('en');
  const [data, setData] = useState(null);

  useEffect(() => {
    isSearch && fetchDictionary(search, lang, setData);
    setIsSearch(false);
  }, [isSearch, search, lang]);

  return (
    <div>
      <Container maxWidth='md'>
        <Header
          search={search}
          setSearch={setSearch}
          lang={lang}
          setLang={setLang}
          setIsSearch={setIsSearch}
        ></Header>
        <Definitions data={data}></Definitions>
      </Container>
    </div>
  );
}

export default App;
