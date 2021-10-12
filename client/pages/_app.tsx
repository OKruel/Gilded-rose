import { AppProps } from 'next/app';

//  STYLE
// import { GlobalStyle } from '../global/layout/components/GlobalStyle';

interface AppPropsWithCookies extends AppProps {
	cookies: unknown;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppPropsWithCookies) => {
	return (
		<>
			{/* <GlobalStyle /> */}
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
