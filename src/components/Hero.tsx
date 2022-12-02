const Hero = () => {
	return (
		<section className="overflow-hidden">
			<div className="container h-screen min-h-[500px] md:min-h-[600px] flex flex-col lg:flex-row lg:items-end justify-end lg:justify-between pb-12">
				<div className="lg:max-w-3xl">
					<h1 className="uppercase ">
						Stop looking.<br></br> You’ve found your dev{' '}
						<span className="text-yellow">team</span>.
					</h1>
					<p>
						Code is our second language.<br></br>
						We like it clean and effective.
					</p>
				</div>
				<a
					href="mailto:hello@rebase.team"
					className="whitespace-nowrap"
				>
					<span className="text-yellow">~/</span>Let’s get started
				</a>
			</div>
		</section>
	);
};
export default Hero;
