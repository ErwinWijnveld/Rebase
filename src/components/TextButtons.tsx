import Link from 'next/link';
import Label from './Label';

const TextButtons = () => {
	return (
		<section className="py-36">
			<div className="container">
				<Label>Contact</Label>
				<h2 className="uppercase">
					Kickstart your <br></br>
					new project With us!
				</h2>
				<div className="flex gap-6 mt-6">
					<Link
						className=" text-[10px] md:text-[18px] border border-yellow px-6 md:px-8 py-[8px] md:py-[10px] rounded-full hover:bg-yellow hover:text-black transition-all duration-300"
						href={'mailto:hello@rebase.team'}
					>
						hello@rebase.team
					</Link>
					<Link
						className=" text-[10px] md:text-[18px] border border-highlight px-6 md:px-8 py-[8px] md:py-[10px] rounded-full bg-highlight hover:bg-yellow hover:text-black transition-all duration-300"
						href={'tel:0615207232'}
					>
						+31 6 15 207 232
					</Link>
				</div>
			</div>
		</section>
	);
};
export default TextButtons;
