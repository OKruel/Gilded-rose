import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// import { GlobalStyle } from '../global/layout/components/GlobalStyle'

// Based on the example at https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		// Customized render page for Styled Components.
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css?family=Open+Sans"
						rel="stylesheet"
						type="text/css"
					/>
					{/* <GlobalStyle /> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
