import { AppProps } from 'next/app';
import ProductProvider from '../context/productsContext';

interface AppPropsWithCookies extends AppProps {
	cookies: unknown;
}

const MyApp = ({ Component, pageProps }: AppPropsWithCookies) => {
	return (
		<ProductProvider>
			<Component {...pageProps} />
		</ProductProvider>
	);
};

export default MyApp;
