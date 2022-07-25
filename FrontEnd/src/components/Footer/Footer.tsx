import OutsideLink from "../UI/OutsideLink";

const Footer: React.FC = () => {
	return (
		<div className="">
			<div className="container">
				<div>
					Developed with ❤️ by
					<OutsideLink link="https://github.com/benlyazid">
						kbelyazid
					</OutsideLink>{" "}
					and
					<OutsideLink link="https://kirwako.com/">
						kirwako
					</OutsideLink>
				</div>
			</div>
		</div>
	);
};

export default Footer;
