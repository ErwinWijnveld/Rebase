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
		<header className="absolute top-0 inset-x-0 w-full container flex justify-between items-center py-8 md:py-14">
			{/* logo */}
			<Link
				href="/"
				className="hover:scale-110 transition-all duration-500 relative  h-[52px] w-[52px] md:h-[86px] md:w-[86px]"
			>
				{logo && (
					<Image src={logo.src} alt={'logo'} priority layout="fill" />
				)}
			</Link>

			{/* cta */}
			{cta && (
				<Link
					className=" text-[10px] md:text-[18px] border border-yellow px-6 md:px-8 py-[8px] md:py-[10px] rounded-full hover:bg-yellow hover:text-black transition-all duration-300"
					href={cta.href}
				>
					{cta.text}
				</Link>
			)}
		</header>
	);
};
export default Header;
