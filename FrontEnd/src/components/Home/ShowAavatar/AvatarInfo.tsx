const AvatarInfo: React.FC<{
	label: string;
	value: string;
}> = (props) => {
	const { label, value } = props;

	return (
		<div className="row">
			<span className="col-6">{label}</span>
			<span className="grey-clr col-6"> : {value}</span>
		</div>
	);
};

export default AvatarInfo;
