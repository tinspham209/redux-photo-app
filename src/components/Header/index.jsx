import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

Header.propTypes = {};

function Header() {
	return (
		<header className="header">
			<Container>
				<Row className="justify-content-between">
					<Col xs="auto">
						<a
							className="header__link header__title"
							href="https://github.com/tinspham209/redux-photo-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							Redux Photo App
						</a>
					</Col>

					<Col xs="auto">
						<NavLink
							exact
							className="header__link"
							to="/sign-in"
							activeClassName="header__link--active"
						>
							Sign In
						</NavLink>
					</Col>
				</Row>
			</Container>
		</header>
	);
}

export default Header;
