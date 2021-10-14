import { createContext, Context, useContext } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { ProductsContext } from '../context/productsContext';

const Dashboard = styled.div`
	height: auto;
	width: 100vw;
	background-color: white;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	overflow: scroll;
`;

const Nav = styled.div`
	height: 150px;
	width: 100%;
	background-color: #f2f2f2;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
	border-bottom: 1px solid black;
`;

interface IProduct {
	name: string;
	sellIn: number;
	quality: number;
}

const context: Context<IProduct[]> = createContext([] as IProduct[]);

const IndexPage = () => {
	const productsList = useContext(ProductsContext).products;

	return (
		<Dashboard title="Home | Next.js + TypeScript Example">
			<Nav>
				<h1>Products in storage</h1>
			</Nav>
			{productsList.map((value) => {
				return (
					<Card>
						<div>Name: {value.name}</div>
						<div>Days to sell: {value.sellIn}</div>
						<div>Quality: {value.quality}</div>
					</Card>
				);
			})}
		</Dashboard>
	);
};

export default IndexPage;
