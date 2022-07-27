const Contactus: React.FC = () => {
	return (
		<div className="container pt-8">
			<div className="black-card p-relative envelop-bg">
				<div className="row">
					<div className="col-md-6">
						<h3 className="text-32-bold">
							Contact Anime list avatars
						</h3>
						<p className="grey-clr">
							You wanna see anime list avatars much better send us
							your feedback.
						</p>
						<p className="grey-clr">
							or if you wanna send us a message let us know in the
							feild below
						</p>
					</div>
					<div className="col-md-6 mt-4 mt-md-0">
						<form
							action="https://form.taxi/s/vsfo7wd8"
							method="POST"
						>
							<input
								name="email"
								type="text"
								className="main-input w-100"
								placeholder="Your email address"
							/>
							<textarea
								name="message"
								className="main-input w-100 mt-4"
								placeholder="Your message"
								rows={5}
							/>
							<button className="mt-4 main-btn p-3">
								Send Messgae
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contactus;
