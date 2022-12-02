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
			<div className="min-h-screen overflow-hidden">
				{children}
				<FollowBlur />
			</div>
		</>
	);
};
export default Layout;
