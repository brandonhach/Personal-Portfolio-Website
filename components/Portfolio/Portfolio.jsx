import React from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import SlideShow from "../Slideshow/SlideShow";

const Portfolio = () => {
	const imageListMarco = [
		"/Images/MarcoTracker/1.png",
		"/Images/MarcoTracker/2.png",
		"/Images/MarcoTracker/3.png",
	];

	const imageListTutor = [
		"/Images/TutoringApp/1.png",
		"/Images/TutoringApp/2.png",
		"/Images/TutoringApp/3.png",
		"/Images/TutoringApp/4.png",
	];

	const imageListEmail = [];
	return (
		<>
			<div className={styles.container}>
				<div className={styles.container_left}>
					<div className={styles.item_left}>
						<SlideShow imageArray={imageListTutor}></SlideShow>
					</div>
					<div className={styles.item_info}>
						<h2>🤖 Ai Tutoring Web App Concept</h2>
						<p>
							<b>Java Springboot</b> + <b> Next.js</b>
						</p>
						<p>Collaborated with a friend.</p>
					</div>

					<div className={styles.item_left}>
						<SlideShow imageArray={imageListEmail}></SlideShow>
					</div>
					<div className={styles.item_info}>
						<h2>📧 Personal Email Service</h2>
						<p>
							<b>Java Springboot </b>
						</p>
					</div>
				</div>
				<div className={styles.container_right}>
					<h1>Projects I worked on.</h1>
					<div className={styles.item_right}>
						<SlideShow imageArray={imageListMarco}></SlideShow>
					</div>
					<div className={styles.item_info}>
						<h2>🍗 Marco Nutrient Tracker</h2>
						<p>
							<b>React.js</b> + <b> Firebase.js</b>
						</p>
						<p>Collaborated with friends.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
