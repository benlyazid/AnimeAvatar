import { Link } from "react-router-dom";

const LeftSection: React.FC = () => {
	return (
		<>
			<h6 className="text-40-bold">Anime list avatars</h6>
			<h1 className="grey-clr text-18-regular main-clr">
				is an anime characters avatar library for normal users, designers and
				developers. You can choose lovely anime characters characters.
			</h1>
			<h2 className="grey-clr mt-3 text-18-regular main-clr">
				And best of all: We provide a simple and free HTTP API that you
				can use right away!
			</h2>
			<div className="mt-4 d-flex align-items-center">
				<button className="main-btn">Create Your Avatar</button>
				<p className="mb-0">
					<span className="ml-3 grey-clr">or</span>
					<Link
						to="/docs"
						className="link ml-3 white-clr font-weight-600"
					>
						check documentation ?
					</Link>
				</p>
			</div>
		</>
	);
};

export default LeftSection;
