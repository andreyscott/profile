import React from "react";
import "./LandingPage.css";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
import {
	EmailIcon,
	GithubIcon,
	LinkedinIcon,
	TwitterIcon,
	InstagramIcon,
} from "../../images/icons/icons";
import data from "../../data.json";

const navLinks = [
	{ label: "Home", path: "/" },
	{ label: "About", path: "/about" },
	{ label: "Resume", path: "/resume" },
	{ label: "Portfolio", path: "/portfolio" },
	{ label: "Contact", path: "/contact" },
];

const LandingPage = () => {
	const renderNavLink = ({ label, path }) => (
		<li className="landing-page__nav-item" key={path}>
			<NavLink
				exact
				to={path}
				activeClassName="landing-page__nav-link--active"
				className="landing-page__nav-link"
			>
				{label}
			</NavLink>
		</li>
	);

	return (
		<div className="landing-page">
			<div className="landing-page__content">
				<section className="landing-page__intro">
					<h1 className="landing-page__name"> Andrew Irorere </h1>

					<Typewriter
						options={{
							strings: ["Web Developer🚀", "Seo Expert👨‍💻.", "🤑Freelancer."],
							autoStart: true,
							loop: true,
							wrapperClassName: "landing-page__role",
							loop: true,
							cursorClassName: "landing-page__cursor",
						}}
					/>
				</section>
				<nav className={`landing-page__nav`} aria-hidden="true">
					<ul className="landing-page__nav-list">
						{navLinks.map((navLink) => renderNavLink(navLink))}
					</ul>
				</nav>

				<ul className="social">
					<li className="social__item">
						<a
							href={data.social.github}
							className="social__link"
							target="_blank"
							aria-label="Github"
						>
							<GithubIcon className="social__icon" />
						</a>
					</li>
					<li className="social__item">
						<a
							href={data.social.linkedIn}
							className="social__link"
							target="_blank"
							aria-label="LinkedIn"
						>
							<LinkedinIcon className="social__icon" width={27} />
						</a>
					</li>
					<li className="social__item">
						<a
							href={"mailto:" + data.social.email}
							className="social__link"
							target="_blank"
							aria-label="Email"
						>
							<EmailIcon className="social__icon" />
						</a>
					</li>
					<li className="social__item">
						<a
							href={data.social.twitter}
							className="social__link"
							target="_blank"
							aria-label="Twitter"
						>
							<TwitterIcon className="social__icon" />
						</a>
					</li>
					<li className="social__item">
						<a
							href={data.social.instagram}
							className="social__link"
							target="_blank"
							aria-label="Instagram"
						>
							<InstagramIcon className="social__icon" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default LandingPage;
