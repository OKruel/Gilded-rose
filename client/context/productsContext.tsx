import React, { createContext, useEffect, Context, useState } from 'react';
import axios from 'axios';

interface IProduct {
	name: string;
	sellIn: number;
	quality: number;
}

export const ProductsContext: Context<{ products: IProduct[] }> = createContext(
	{
		products: [] as IProduct[],
	}
);

const ProductProvider: React.FC = ({ children }) => {
	const [productsList, setProductsList] = useState<IProduct[]>([]);

	useEffect(() => {
		axios.get('http://localhost:5000/products').then((res) => {
			console.log(res.data);
			setProductsList(res.data as IProduct[]);
		});
	}, []);

	return (
		<ProductsContext.Provider value={{ products: productsList }}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductProvider;
