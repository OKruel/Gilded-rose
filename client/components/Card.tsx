import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 70px;
	width: 350px;
	margin: 10px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
	flex-wrap: wrap;
	border: 1px solid black;
	border-radius: 10px;
	padding: 10px;
	box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const Card: FC = ({ children }) => {
	return <Container>{children}</Container>;
};

export default Card;
