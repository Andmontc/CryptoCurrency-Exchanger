import React from 'react';
import styled from '@emotion/styled';

const Answer = styled.div`
	font-family:'Bebas Neue', cursive;
	background-color: #FFF;
	border-radius: 10px;
	color:black;
	padding: 5px;
	margin-top: 20px;
`;
const Text = styled.p`
	font-size:22px;
	margin-left:39px;
	margin-top:5px;
	span {
		font-weight:bold;
	}
`;
const Price = styled.p`
	font-size: 45px;
	margin-top:8px;
	margin-bottom:2px;
	text-align:center;
	span {
		font-weight:bold;
	}
`;

const Quote = ({answer}) => {
	if (Object.keys(answer).length === 0){
		return null;
	}
	return ( 
		<Answer>
			<Price>The price is: <span>{answer.PRICE}</span></Price>
			<Text>The max price today is: <span>{answer.HIGHDAY}</span></Text>
			<Text>The min price today is: <span>{answer.LOWDAY}</span></Text>
			<Text>Last 24h variation: <span>{answer.CHANGEPCT24HOUR}</span></Text>
			<Text>Last Update: <span>{answer.LASTUPDATE}</span></Text>
		</Answer>
	 );
}
 
export default Quote;