import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as DocsIcon } from "../../assets/icons/apps.svg";
import { Link } from "react-router-dom";
import OutsideLink from "../UI/OutsideLink";
import GithubIcon from "../UI/GithubIcon";

const Navbar: React.FC = () => {
	return (
		<div className="navbar-container">
			<div className="container py-4">
				<div className="row m-0 align-items-end justify-content-between">
					<Link to="/" className="row align-items-end link">
						<Logo />
						<span className="white-clr h5 font-weight-600 mb-0 d-none d-lg-inline">Anime list avatras</span>
						<span className="white-clr h5 font-weight-600 mb-0 d-inline d-lg-none">ALV</span>
					</Link>
					<div className="links-container">
						<Link  className="link-item icon-animate" to="/docs">
							<DocsIcon className="icon" fill="white" height={18.8} width={18.8} />
							Docs
						</Link>
						<OutsideLink className="link-item github-corner" link="https://github.com/benlyazid/AnimeAvatar">
							<>

								<GithubIcon />
								Github
							</>
						</OutsideLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
