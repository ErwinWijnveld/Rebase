import Head from 'next/head';
import FollowBlur from './FollowBlur';
import Header, { HeaderProps } from './Header';

type LayoutProps = {
	header?: HeaderProps;
	children?: React.ReactNode;
};

const Layout = ({ children, header }: LayoutProps) => {
	return (
		<>
			<Header {...header} />
			<Head>
				<title>
					Rebase | A creative and motivated development team
				</title>
				<meta
					name="description"
					content="Code is our second language. We like it clean and effective."
				/>
			</Head>
			<div className="min-h-screen overflow-hidden">
				{children}
				<FollowBlur />
			</div>
		</>
	);
};
export default Layout;
