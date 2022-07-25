import MdEditor from 'md-editor-rt';

const MarkdownPreview: React.FC<{value: string}> = (props) => {
	const {value} = props;
	return (
		<MdEditor modelValue={value} previewOnly={true} language="en-US" className="mark-down-preview" />
	);
}

export default MarkdownPreview;