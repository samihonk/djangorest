import React, { Fragment, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { setAuthToken } from "../../utils/AxiosHeaders";
import AuthContext from "../../context/auth/AuthContext";
import ContactContext from "../../context/contact/ContactContext";

const Header = () => {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);
	const { isAuthenticated, logout, loadUser } = authContext;
	const { clearContacts } = contactContext;
	const history = useHistory();

	useEffect(() => {
		localStorage.token ? loadUser() : null;
	}, []);

	const onLogout = () => {
		clearContacts();
		logout();
		setAuthToken();
		history.push("/");
	};

	const guestLogin = (
		<Link className="nav-link" to="/login">
			Login
		</Link>
	);

	const authLogin = (
		<Fragment>
			<a href="#!" onClick={onLogout} className="nav-link">
				Logout
			</a>
			<a href="/api/" className="nav-link">
				Api
			</a>
			<a className="nav-link" href="/admin/">
				Admin
			</a>
		</Fragment>
	);

	const authLinks = (
		<li className="nav-item">
			<Link className="nav-link" to="/messages">
				Messages
			</Link>
		</li>
	);

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				Contact me
			</Link>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/sendMessage">
							Send message
						</Link>
					</li>
					{isAuthenticated ? authLinks : null}
				</ul>
				<div className="navbar-nav">
					{isAuthenticated ? authLogin : guestLogin}
				</div>
			</div>
		</nav>
	);
};

export default Header;
