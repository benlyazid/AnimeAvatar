import "md-editor-rt/lib/style.css";
import { useEffect, useState } from "react";
import MarkdownPreview from "../../UI/MarkdownPreview";
import { Link as LinkSmooth } from "react-scroll";

const smoothScrollDuration = 500;
const offset = -18;

const linkForDocs = `\`\`\`python\n${process.env.REACT_APP_API_ENDPOINT}/avatar?gender=_gneder&name=_name&animeName=_anime\n\`\`\``;
const linkForAnimeList = `\`\`\`python\n${process.env.REACT_APP_API_ENDPOINT}/animelist\n\`\`\``;

const animeListMarkdown = (jsonValue: string) =>
	`\`\`\`json\n${jsonValue}\n\`\`\``;

const DocsBody: React.FC = () => {
	const [animeListOptions, setAnimeListOptions] = useState<
		{
			value: string;
			label: string;
		}[]
	>([{ value: "", label: "" }]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_ENDPOINT}/animelist`)
			.then((res) => res.json())
			.then((data) => {
				// data.animeList.push({ value: RandomValue, label: "Random" });
				setAnimeListOptions((_) => data.animeList);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="container pt-6">
			<h2 className="text-32-bold">HTTP-API</h2>
			<h1 className="text-18-regular second-clr">
				Our free HTTP-API is the easiest way to use Anime Characters
				Avatars. Just use the following URL as image source.
			</h1>
			<MarkdownPreview value={linkForDocs} />
			<p className="text-16-regular white-clr">
				Replace <span className="badge">_gender</span> with male,
				female.
			</p>
			<p className="text-16-regular white-clr">
				The value of <span className="badge">_name</span> can be
				anything you like - but don't use any sensitive or personal data
				here!
			</p>
			<p className="text-16-regular white-clr">
				Replace <span className="badge">_anime</span> with the anime
				value geted from the anime list{" "}
				<LinkSmooth smooth={true} to="anime-list" className="link-to-id" duration={smoothScrollDuration} offset={offset}>
					Below here
				</LinkSmooth>
			</p>
			<p>
				PS: If you didn't set any of the above variables it will chose
				randome value for evry unseted variables.
			</p>
			<h2 className="text-18-regular second-clr mt-4 pt-4">
				Get all available anime
			</h2>
			<MarkdownPreview value={linkForAnimeList} />
			<p className="text-16-regular white-clr" id="anime-list">
				will return you a JSON list like below :
			</p>
			<MarkdownPreview
				value={animeListMarkdown(
					JSON.stringify(
						animeListOptions,
						(key, value) => value || "",
						4
					).replace(/"([^"]+)":/g, "$1:")
				)}
			/>
		</div>
	);
};

export default DocsBody;
