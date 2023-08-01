import React from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";

const Portfolio = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.container_left}>
					<div className={styles.item_left}>
						<Image></Image>
					</div>
					<div className={styles.item_info}>
						<h2>Ai Tutoring Web App Concept</h2>
						<p>
							<b>Java Springboot</b> + <b> Next.js</b>
						</p>
					</div>

					<div className={styles.item_left}>
						<Image></Image>
					</div>
					<div className={styles.item_info}>
						<h2>Personal Email Service</h2>
						<p>
							<b>Java Springboot </b>
						</p>
					</div>
				</div>
				<div className={styles.container_right}>
					<h1>Projects I made!</h1>
					<div className={styles.item_right}>
						<Image></Image>
					</div>
					<div className={styles.item_info}>
						<h2>Marco Nutrient Tracker</h2>
						<p>
							<b>React.js</b> + <b> Firebase.js</b>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
