import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import IconAnimate from "../IconLink/IconAnimate";

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
							<IconAnimate
								animation={"shake"}
								icon={faGithub}
								label={"Github"}></IconAnimate>
						</Link>
					</li>
					<li>
						<Link href={"https://www.linkedin.com/in/brandon-hach/"} target="_blank">
							<IconAnimate
								animation={"shake"}
								icon={faLinkedin}
								label={"Linkedin"}></IconAnimate>
						</Link>
					</li>
					<li>
						<Link href={"/"} target="_blank">
							<IconAnimate
								animation={"shake"}
								icon={faFile}
								label={"Resume"}></IconAnimate>
						</Link>
					</li>
				</div>
				<div className={styles.right}>
					<Link href={"/"}>
						<IconAnimate animation={"bounce"} icon={faHouse}></IconAnimate>
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Header;
