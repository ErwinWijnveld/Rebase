import FollowBlur from './FollowBlur';

const Hero = () => {
	return (
		<section>
			<div className="container h-screen min-h-[600px] flex items-end justify-between pb-12">
				<div className="max-w-3xl">
					<h1 className="uppercase">
						Stop looking.<br></br> You’ve found your dev{' '}
						<span className="text-yellow">team</span>.
					</h1>
					<p>
						Code is our second language.<br></br>
						We like it clean and effective.
					</p>
				</div>
				<p>
					<span className="text-yellow">~/</span>Let’s get started
				</p>
			</div>
		</section>
	);
};
export default Hero;
