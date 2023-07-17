import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.left}>
					<li>
						<h3>Brandon Hach</h3>
					</li>
				</div>
				<div className={styles.mid}>
					<li>
						<Link href={"https://github.com/brandonhach "} target="_blank">
							Github
						</Link>
					</li>
					<li>
						<Link href={"https://www.linkedin.com/in/brandon-hach/"} target="_blank">
							Linkedin
						</Link>
					</li>
					<li>
						<Link href={"/"} target="_blank">
							Resume
						</Link>
					</li>
				</div>
				<div className={styles.right}>
					<li>
						<button>ICON</button>
					</li>
				</div>
			</nav>
		</>
	);
};

export default Header;
