const AvatarInfo: React.FC<{
	label: string;
	value: string;
}> = (props) => {
	const { label, value } = props;

	return (
		<div className="row mb-2">
			<div className="col-5 d-flex justify-content-between">
				<span>{label}</span>
				<span>:</span>
			</div>
			<span className="grey-clr col-7">{value}</span>
		</div>
	);
};

export default AvatarInfo;
