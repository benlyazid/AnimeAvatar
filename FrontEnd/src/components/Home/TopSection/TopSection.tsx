import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const TopSection: React.FC = () => {
	return (
		<div className="container">
			<div className="row pt-6">
				<div className="col-md-6">
					<LeftSection />
				</div>
				<div className="col-md-6">
					<RightSection />
				</div>
			</div>
		</div>
	);
};

export default TopSection;
