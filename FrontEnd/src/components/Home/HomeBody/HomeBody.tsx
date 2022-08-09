import TopSection from "../TopSection/TopSection";
import ShowAvatar from "../ShowAavatar/ShowAavatar";
import Contactus from "../Contactus/Contactus";
import Statics from "../Statics/Statics";

const HomeBody: React.FC = () => {
	return (
		<>
			<TopSection />
			<ShowAvatar />
			<Statics />
			<Contactus />
		</>
	);
};

export default HomeBody;
