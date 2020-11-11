import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
	font-family:'Bebas Neue', cursive;
	color:#FFF;
	text-transform: uppercase;
	font-weight:bold;
	font-size: 2.4rem;
	margin-top:2rem;
	display:block;
`;

const Select = styled.select`
	width:100%;
	font-size:1.2rem;
	display:block;
	padding:1rem;
	-webkit-appearance:none;
	border-radius:10px;
	border:none;
`;

const useChange = (label, initState, options) => {
	// custom hook state
	const [state, updateState] = useState('');
	
	const Selectcrypt = () => (

		<Fragment>
			<Label>{label}</Label>
			<Select
				onChange={ e => updateState(e.target.value)}
				value={state}>
				<option value="">--Select a crypto currency--</option>
				{options.map(option => (
					<option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
				))}
			</Select>
		</Fragment>
	);
	// Return state interface and update of the state
	return [state, Selectcrypt, updateState];
}

export default useChange;