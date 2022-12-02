import Image from 'next/image';
import Link from 'next/link';

export type HeaderProps = {
	logo?: {
		src: string;
		alt: string;
	};
	cta?: {
		text: string;
		href: string;
	};
};

const Header = ({ logo, cta }: HeaderProps) => {
	return (
		<header className="absolute top-0 inset-x-0 w-full container flex justify-between items-center py-14">
			{/* logo */}
			<Link
				href="/"
				className="hover:scale-110 transition-all duration-500"
			>
				{logo && (
					<Image
						src={logo.src}
						alt={logo.alt}
						width={86}
						height={86}
						priority
					/>
				)}
			</Link>

			{/* cta */}
			{cta && (
				<Link
					className="text-[18px] border border-yellow px-8 py-[10px] rounded-full hover:bg-yellow hover:text-black transition-all duration-300"
					href={cta.href}
				>
					{cta.text}
				</Link>
			)}
		</header>
	);
};
export default Header;
