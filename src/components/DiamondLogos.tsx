import Image from 'next/image';
import Link from 'next/link';
import lekkerwhite from '../assets/images/lekkerwhite.svg';
import bruchen from '../assets/images/logo-bruchen.svg';
import logo from '../assets/images/logo.svg';
import strivesports from '../assets/images/strivesports.svg';
import Label from './Label';

const DiamondLogos = () => {
	const logos = [
		{
			...bruchen,
			href: 'https://vbstaircases.com/',
		},

		{
			...lekkerwhite,
			href: 'https://events.lekkerboats.com/',
		},
		{
			...strivesports,
			href: 'https://strivesports.nl/',
		},
		{
			...logo,
			href: 'https://rebase.team/',
		},
	];
	return (
		<section className="py-24 md:py-44">
			<div className="container flex flex-wrap-reverse md:flex-nowrap items-center justify-between gap-8">
				<div className="w-full md:w-1/2 scale-75 md:scale-1 md:-translate-x-1/3 p-4">
					<div className="grid gap-8 grid-cols-2 rotate-45">
						{logos.map((logo, index) => {
							const extraClasses =
								index === 1
									? ' border border-yellow md:scale-[1.2] origin-bottom-left '
									: ' ';

							return (
								<Link
									href="/"
									key={index}
									className={
										'aspect-square bg-highlight rounded-[20px] flex items-center justify-center p-4' +
										extraClasses
									}
									data-aos="op-in"
									data-aos-delay={index * 100}
								>
									<div className="relative w-full h-full -rotate-45">
										<Image
											src={logo.src}
											alt={'logo'}
											placeholder="blur"
											objectFit="contain"
											blurDataURL={logo.src}
											fill
										/>
									</div>
								</Link>
							);
						})}
					</div>
				</div>

				<div className="w-full md:w-1/2">
					<Label>Build</Label>
					<h2 className="uppercase">Creative problem-solvers.</h2>
					<p>
						“Make it simple, but significant.” <br></br>
						We build what your customers need, making sure it’s
						refined and renewed.
					</p>
				</div>
			</div>
		</section>
	);
};
export default DiamondLogos;
