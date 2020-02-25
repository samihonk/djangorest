import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { setCSRF, setHeaderAppJson } from "../../utils/AxiosHeaders";

const Form = () => {
	const { handleSubmit, register, errors } = useForm();
	const emailRegex = /\S+@\S+\.\S+/;

	const onSubmit = (message, e) => {
		setCSRF();
		setHeaderAppJson();
		axios
			.post("/api/contacts/", { ...message })
			.then(() => {
				e.target.reset();
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container">
			<form
				className="form-group"
				onSubmit={handleSubmit(onSubmit)}
				style={{
					marginTop: "2px",
					padding: "4px",
					border: "solid",
					borderWidth: "1px",
					borderColor: "white"
				}}
			>
				<div className="form-group">
					<input
						className="is-invalid"
						type="text"
						name="title"
						placeholder="Add title..."
						ref={register({ required: "Required" })}
					/>
					{errors.title && (
						<div className="invalid-feedback">
							Title is required.
						</div>
					)}
				</div>
				<div className="form-group">
					<input
						className="is-invalid"
						type="text"
						name="email"
						placeholder="Add email..."
						ref={register({
							required: "Email is required.",
							pattern: {
								value: emailRegex,
								message: "Invalid email."
							}
						})}
					/>
					{errors.email && (
						<div className="invalid-feedback">
							{errors.email.message}
						</div>
					)}
				</div>
				<div className="form-group">
					<textarea
						className="is-invalid"
						type="text"
						name="message"
						placeholder="Write message..."
						rows="5"
						ref={register({ required: "Required" })}
						style={{
							width: "100%"
						}}
					/>
					{errors.message && (
						<div className="invalid-feedback">
							Message is required.
						</div>
					)}
				</div>
				<input
					type="submit"
					value="Send Message"
					className="btn btn-dark btn-block"
				/>
			</form>
		</div>
	);
};

export default Form;
