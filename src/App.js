import { useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';

function App() {
  const [word, setWord] = useState('');
  const [lang, setLang] = useState('en');

  return (
    <div>
      <Container maxWidth='md'>
        <Header
          lang={lang}
          setLang={setLang}
          word={word}
          setWord={setWord}
        ></Header>
        <div>Dictionary</div>
      </Container>
    </div>
  );
}

export default App;
