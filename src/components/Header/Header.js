import React from "react";
import style from './Header.css';

const Logo = () => (
	<a href="/">
		<img src="/img/edrolo-logo.png" />
	</a>
);

const Header = () => {
	return (
		<header className={style.header}>
			<Logo />
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
