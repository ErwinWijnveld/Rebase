import logo from '../../public/logo.svg';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const index = () => {
	return (
		<Layout
			header={{
				logo,
				cta: {
					text: 'hello@rebase.team',
					href: 'mailto:hello@rebase.team',
				},
			}}
		>
			<Hero />
		</Layout>
	);
};
export default index;
