import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				Contact me
			</Link>
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
			<div
				className="collapse navbar-collapse"
				id="navbarNavAltMarkup"
			></div>
		</nav>
	);
};

export default Header;
