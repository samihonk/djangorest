import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

const Header = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
	}, []);

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
						<Link className="nav-link" to="/messages">
							Messages
						</Link>
					</li>
				</ul>
				<div className="navbar-nav">
					<Link className="nav-link" to="/login">
						Login
					</Link>
					<a className="nav-link" href="/api/">
						Api
					</a>
					<a className="nav-link" href="/admin/">
						Admin
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Header;
