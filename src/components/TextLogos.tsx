import Image from 'next/image';
import Link from 'next/link';
import linux from '../assets/images/linux.svg';
import docker from '../assets/images/logo-docker.svg';
import github from '../assets/images/logo-github.svg';
import laravel from '../assets/images/logo-laravel.svg';
import react from '../assets/images/logo-react.svg';
import tailwind from '../assets/images/logo-tailwind.svg';
import mollie from '../assets/images/mollie-1.svg';
import next from '../assets/images/next-js.svg';
import Label from './Label';

const TextLogos = () => {
	return (
		<section className="py-24 md:py-44">
			<div className="container flex flex-wrap md:flex-nowrap items-center justify-between gap-8">
				<div className="w-full md:w-1/2">
					<Label>Tech stack</Label>
					<h2 className="uppercase">
						Technically <br></br> creative.
					</h2>
					<p>
						We’re tech enthusiasts with extensive experience
						building web(apps).
					</p>
				</div>
				<div className="w-full md:w-1/2">
					<div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-4">
						{[
							laravel,
							react,
							next,
							tailwind,
							docker,
							mollie,
							github,
							linux,
						].map((logo, index) => (
							<div
								className="relative"
								key={index}
								data-aos="fade-up"
								data-aos-delay={index * 100}
							>
								<Image
									src={logo.src}
									alt={'logo'}
									priority
									height={logo.height}
									width={logo.width}
									placeholder="blur"
									blurDataURL={logo.src}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
export default TextLogos;
