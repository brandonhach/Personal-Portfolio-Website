import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Header/header.module.css";

const IconAnimate = ({ icon, animation, label }) => {
	const [animate, setAnimate] = useState(false);
	return (
		<>
			<div className={styles.icon}>
				<FontAwesomeIcon
					icon={icon}
					color="#77a9c5"
					size="xl"
					shake={animation === "shake" && animate}
					bounce={animation === "bounce" && animate}
					onAnimationEnd={() => setAnimate(false)}
					onMouseOver={() => setAnimate(true)}
					onMouseOut={() => setAnimate(false)}
				/>
				<h4>{label}</h4>
			</div>
		</>
	);
};

export default IconAnimate;
