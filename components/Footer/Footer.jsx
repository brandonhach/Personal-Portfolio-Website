import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<p>Designed and Developed by Brandon Hach. </p>
			<p>
				Built with <b> Next.js</b>, <b> React Fiber</b>, <b> Three.js</b>, &
				<b> Framer Motion</b>.
			</p>
			<p>
				Hosted on <b> Vercel</b>.
			</p>
		</div>
	);
};

export default Footer;
