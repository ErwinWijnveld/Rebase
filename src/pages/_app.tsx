import localFont from '@next/font/local';
import type { AppProps } from 'next/app';
import '../assets/styles/globals.scss';

const hackregular = localFont({
	variable: '--hackRegular',
	src: '../assets/fonts/hackregular.woff2',
});
const antiqueOlive = localFont({
	variable: '--antiqueOlive',
	src: [
		{
			path: '../assets/fonts/Antique-Olive-Std-Roman.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/Antique-Olive-Std-Bold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../assets/fonts/Antique-Olive-Std-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../assets/fonts/Antique-Olive-Std-Black.woff2',
			weight: '900',
			style: 'normal',
		},
	],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={hackregular.variable + ' ' + antiqueOlive.variable}>
			<Component {...pageProps} />
		</div>
	);
}
