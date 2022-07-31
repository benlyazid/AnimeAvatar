import { useState, useEffect } from "react";
import Select from "react-select";
import { ReactComponent as CogIcon } from "../../../assets/icons/cog.svg";
import { ReactComponent as UpRightIcon } from "../../../assets/icons/up-right.svg";
import { ReactComponent as DownloadIcon } from "../../../assets/icons/download.svg";
import OutsideLink from "../../UI/OutsideLink";
import AvatarInfo from "./AvatarInfo";
import { saveAs } from "file-saver";

const RandomValue = "random";

const genderOptions = [
	{ value: "male", label: "Male" },
	{ value: "female", label: "Female" },
	{ value: RandomValue, label: "Random" },
];

const downloadImage = (imageUrl: string) => {
	saveAs(imageUrl, "anime-avatar.jpg");
};

const ShowAvatar: React.FC = () => {
	const [selectedAnimeName, setSelectedAnimeName] = useState<{
		value: string;
		label: string;
	} | null>(null);
	const [selectedGender, setSelectedGender] = useState<{
		value: string;
		label: string;
	} | null>(null);
	const [animeListOptions, setAnimeListOptions] = useState<
		{
			value: string;
			label: string;
		}[]
	>([{ value: "", label: "" }]);
	const [seed, setSeed] = useState<string>("your-custom-seed");
	const [showGenderInput, setShowGenderInput] = useState<boolean>(false);

	const changeAnimeNameHandler = (selectedAnime: any) => {
		if (selectedAnime.value === RandomValue) {
			setSelectedAnimeName(null);
			return;
		}
		setSelectedAnimeName(selectedAnime);
	};

	const changeGenderHandler = (selectedGender: any) => {
		if (selectedGender.value === RandomValue) {
			setSelectedGender(null);
			return;
		}
		setSelectedGender(selectedGender);
	};

	const changeSeedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSeed(e.target.value);
	};

	const showGenderHandler = () => {
		setShowGenderInput((prevShowGender) => !prevShowGender);
	};

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_ENDPOINT}/animelist`)
			.then((res) => res.json())
			.then((data) => {
				data.animeList.push({ value: RandomValue, label: "Random" });
				setAnimeListOptions((_) => data.animeList);
			})
			.catch((err) => console.log(err));
	}, []);

	let avatarLink = `${process.env.REACT_APP_API_ENDPOINT}/avatar?name=${seed}`;
	if (selectedAnimeName != null)
		avatarLink += `&animeName=${selectedAnimeName.value}`;

	if (selectedGender != null) avatarLink += `&gender=${selectedGender.value}`;

	return (
		<div className="pt-6 container">
			<div
				className="row justify-content-around align-items-end"
				id="show-avatar"
			>
				<div className="main-card col-md-12 p-relative">
					<img
						src={avatarLink}
						alt="user avatar"
						className="avatar-img"
						width={100}
						height={100}
					/>
					<div className="d-flex justify-content-between mb-2">
						<div className="popup-handler-container">
							<CogIcon
								onClick={showGenderHandler}
								width={18}
								height={18}
								className="cog-icon"
							/>
							<span className="hover-popup">
								Advanced options
							</span>
						</div>
						<div>
							<span className="popup-handler-container">
								<DownloadIcon
									width={18}
									height={18}
									className="download-icon mr-3"
									onClick={(_) => downloadImage(avatarLink)}
								/>
								<span className="hover-popup">
									download avatar
								</span>
							</span>
							<OutsideLink
								className="popup-handler-container"
								link={avatarLink}
							>
								<UpRightIcon
									width={18}
									height={18}
									className="up-right-icon"
								/>
								<span className="hover-popup">
									open in new tab
								</span>
							</OutsideLink>
						</div>
					</div>
					<div className="border-1 row m-0 align-items-center mt-4 border-rounded-1">
						<Select
							value={selectedAnimeName}
							onChange={changeAnimeNameHandler}
							options={animeListOptions}
							className="main-select"
							classNamePrefix="main-select"
							placeholder="Anime Name"
						/>
						<input
							type="text"
							className="left-border rounded-left-none col-8 main-input"
							placeholder="your-custom-seed"
							onChange={changeSeedHandler}
							value={seed}
						/>
					</div>
					<div className="row m-0">
						<p className="w-100 second-clr mt-3 m-0">
							Don't use sensitive or personal data as seed!
						</p>
						{showGenderInput && (
							<Select
								value={selectedGender}
								onChange={changeGenderHandler}
								options={genderOptions}
								className="gender-select mt-3"
								classNamePrefix="gender-select"
								placeholder="Gender"
							/>
						)}
					</div>
				</div>
				<div className="mt-4 mt-lg-0">
					<h6 className="text-32-bold">Your Avatar Options:</h6>
					<AvatarInfo label="Name" value={seed} />
					<AvatarInfo
						label="Anime Name"
						value={
							selectedAnimeName != null
								? selectedAnimeName.label
								: "Random"
						}
					/>
					<AvatarInfo
						label="Gender"
						value={
							selectedGender != null
								? selectedGender.label
								: "Random"
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default ShowAvatar;
