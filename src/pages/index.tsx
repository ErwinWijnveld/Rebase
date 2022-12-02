import logo from '../../public/logo.svg';
import DiamondLogos from '../components/DiamondLogos';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import TextButtons from '../components/TextButtons';
import TextLogos from '../components/TextLogos';

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
			<TextLogos />
			<DiamondLogos />
			<TextButtons />
		</Layout>
	);
};
export default index;
