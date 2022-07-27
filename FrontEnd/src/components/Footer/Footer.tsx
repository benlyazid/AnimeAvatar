import OutsideLink from "../UI/OutsideLink";

const Footer: React.FC = () => {
	return (
		<div className="pt-6">
			<div className="py-4 black-bg">
				<div className="container d-flex justify-content-between text-16-regular">
					<div>
						<span className="d-none d-lg-inline">
							Developed with ❤️ by{" "}
						</span>
						<span className="d-inline d-lg-none">
							Made by{" "}
						</span>
						<OutsideLink
							link="https://github.com/benlyazid"
							className="link"
						>
							benlyazid
						</OutsideLink>{" "}
						and{" "}
						<OutsideLink
							link="https://kirwako.com/"
							className="link"
						>
							kirwako
						</OutsideLink>
					</div>
					<div>
						<div>
							{/* [we are very 😀 about every coffee!] */}
							Buy us a coffee
							<a
								href="https://www.buymeacoffee.com/s7v7n"
								target="_blank"
								rel="nofollow noopener noreferrer"
								className="link"
							>
								{" "}benlyazid, {" "}
							</a>
							<a
								href="https://www.buymeacoffee.com/imranbaali"
								target="_blank"
								rel="nofollow noopener noreferrer"
								className="link"
							>
								kirwako{" "}
							</a>
							☕
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
