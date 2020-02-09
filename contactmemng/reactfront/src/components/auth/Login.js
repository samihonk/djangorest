import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/auth/AuthContext";
import PropTypes from "prop-types";

const Login = () => {
	const authContext = useContext(AuthContext);
	const { login, isAuthenticated } = authContext;
	const { handleSubmit, register, errors } = useForm();
	const history = useHistory();

	useEffect(() => {
		if (isAuthenticated) {
			history.push("/messages");
		}
	}, [isAuthenticated]);

	const onSubmit = message => {
		login(message);
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
						name="username"
						placeholder="username"
						ref={register({ required: "Required" })}
					/>
					{errors.username && (
						<div className="invalid-feedback">
							Username is required.
						</div>
					)}
				</div>
				<div className="form-group">
					<input
						className="is-invalid"
						type="password"
						name="password"
						placeholder="password"
						ref={register({
							required: "Password is required."
						})}
					/>
					{errors.password && (
						<div className="invalid-feedback">
							{errors.password.message}
						</div>
					)}
				</div>
				<input
					type="submit"
					value="Login"
					className="btn btn-dark btn-block"
				/>
			</form>
		</div>
	);
};

Login.propTypes = {
	history: PropTypes.object.isRequired
};

export default Login;
