import { useState, useEffect } from "react";
import { io } from "socket.io-client";


const socket = io(`${process.env.REACT_APP_API_LINK}`);

const ShowAvatar: React.FC = () => {
	const [stats, setStats] = useState<{
		numberOfRequests: number;
		numberOfAnimes: number;
		contries: number;
	}>({
		numberOfRequests: 0,
		numberOfAnimes: 0,
		contries: 0,
	});

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_ENDPOINT}/statistiques`)
			.then((res) => res.json())
			.then((data) => {
				setStats(data);
			})
			.catch((err) => console.log(err));

		socket.on("sendStatistiques", data => {
			setStats(data);
		});

	}, []);

	return (
		<div className="pt-6 container">
			<div className="row justify-content-around m-0 p-0">
				<StatCard
					label="Used Avatars"
					info={stats.numberOfRequests}
				/>
				<StatCard label="Supported Animes" info={stats.numberOfAnimes} />
				<StatCard label="Countries" info={stats.contries} />
			</div>
		</div>
	);
};

export default ShowAvatar;

const StatCard: React.FC<{ label: string, info: number }> = ({ label, info }) => {
	return (
		<div className="col-lg-4 mt-4 mt-lg-0 d-flex align-items-center flex-column justify-content-center">
			<p className="text-32-bold grey-clr main-clr">{label}</p>
			<p className="text-40-bold mb-0">{info}</p>
		</div>
	);
};
