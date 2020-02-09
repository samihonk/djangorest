import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import PropTypes from "prop-types";

const PrivateRoute = ({ children, ...rest }) => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated } = authContext;

	return (
		<Route {...rest}>
			{isAuthenticated ? children : <Redirect to="/login" />}
		</Route>
	);
};

PrivateRoute.propTypes = {
	children: PropTypes.instanceOf(React.Component)
};

export default PrivateRoute;
