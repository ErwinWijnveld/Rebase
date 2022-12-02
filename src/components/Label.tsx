type LabelProps = {
	children?: React.ReactNode;
	className?: string;
	[key: string]: any;
};

const Label = (props: LabelProps) => {
	const { children, className, ...rest } = props;

	return (
		<p {...rest} className={`label text-yellow uppercase ${className}`}>
			<span className="font-light">~/</span>
			{children}
		</p>
	);
};
export default Label;
