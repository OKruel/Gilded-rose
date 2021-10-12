import Link from 'next/link';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Container = styled.div`
	height: 200px;
	width: 200px;
	background-color: green;
`;

const IndexPage = () => (
	<Layout title="Home | Next.js + TypeScript Example">
		<h1>Hello Next.js 👋</h1>
		<Container />
		<p>
			<Link href="/about">
				<a>About</a>
			</Link>
		</p>
	</Layout>
);

export default IndexPage;
