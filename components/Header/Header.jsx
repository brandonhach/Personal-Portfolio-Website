import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.left}>
					<li>
						<Link href={"/"}>Github</Link>
					</li>
					<li>
						<Link href={"/"}>Linkedin</Link>
					</li>
					<li>
						<Link href={"/"}>Resume</Link>
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
