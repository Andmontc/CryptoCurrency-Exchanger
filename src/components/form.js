import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useChange from '../hooks/useChange';
import Error from './error'
import axios from 'axios';

const Button = styled.input `
	margin-top: 20px;
	font-weight: bold;
	font-size: 20px;
	padding: 10px;
	background-color: #66a2fe;
	border: none;
	width: 100%;
	border-radius: 10px;
	color: #fff;
	transition: background-color .3s ease;
	
	&:hover {
		background-color:#326AC0;
		cursor: pointer;
	}
`;
const Form = ({saveCoin, saveCryptocoin}) => {

	// state of crypto currency
	const[ cryptolist, saveCrypto] = useState([]);
	const[ error, saveError] = useState(false);

	const CURRENCY = [
		{code: 'USD', name: 'US Dollar'},
		{code: 'EUR', name: 'Euro'},
		{code: 'GBP', name: 'Pound Sterling'}
	]
	// use custom hook useCurrency
	const[currency, Selection] = useCurrency('Choose a currency', '', CURRENCY);
	// use custom hook useCurrency
	const[crypto, Selectcrypt] = useChange('Choose your CryptoCurrency', '', cryptolist);

	//api call
	useEffect (() => {
		const apiCall = async () => {
			const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

			const result = await axios.get(url);
			saveCrypto(result.data.Data);
		}
		apiCall();
	}, []);

	// submit
	const currencyQuote = e => {
		e.preventDefault();
		//validation
		if (currency === '' || crypto === '') {
			saveError(true);
			return;
		}
		saveCoin(currency);
		saveCryptocoin(crypto);
		saveError(false);

	}
	return ( 
		<form
			onSubmit={currencyQuote}
		>
			{error ? <Error msg="All fields are required"/>: null}
			<Selection />
			<Selectcrypt />
			<Button 
				type="submit"
				value="Calculate"
				/>
		</form>
	 );
}
 
export default Form;