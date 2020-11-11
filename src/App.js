import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Form from './components/form';
import Quote from './components/quote';
import Spin from './components/spinner'
import axios from 'axios';


const Container = styled.div `
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
  }
`;

const Imagen = styled.img `
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1 `
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;
function App() {

  const[coin, saveCoin] = useState('');
  const[cryptocoin, saveCryptocoin] = useState('');
  const[answer, saveAnswer] = useState({});
  const[load, saveLoad] = useState(false);

  useEffect(() => {

    const quoteCrypto = async () => {
      if (coin === ''){
        return;
      }
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocoin}&tsyms=${coin}`;
      const result = await axios.get(url);
      saveLoad(true);

      setTimeout(() => {
        saveLoad(false);
        saveAnswer(result.data.DISPLAY[cryptocoin][coin]);
      }, 3000);
    }
    quoteCrypto();
  },[coin,cryptocoin]);

  const loading = (load) ? <Spin /> : <Quote answer={answer} />

  return (
   <Container>
     <div>
        <Imagen 
          src={imagen}
          alt="Crypto img"
        />
     </div>
     <div>
        <Heading> Cryptocurrency Exchanger </Heading>
        <Form
          saveCoin={saveCoin}
          saveCryptocoin={saveCryptocoin}
        />
        {loading}
     </div>
   </Container>
  );
}

export default App;
