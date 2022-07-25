import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const TopSection: React.FC = () => {
	return (
		<div className="container">
			<div className="row pt-6">
				<div className="col-lg-6">
					<LeftSection />
				</div>
				<div className="col-lg-6 mt-4 pt-4 mt-lg-0 pt-lg-0">
					<RightSection />
				</div>
			</div>
		</div>
	);
};

export default TopSection;
